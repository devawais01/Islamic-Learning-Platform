import { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    course: "",
    package: "",
    language: "",
  });
  document.title = "Quran Academy - Registration";

  const [errors, setErrors] = useState({});
  const [heading, setHeading] = useState("Registration Form");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.fname.trim()) tempErrors.fname = "First name is required";
    if (!formData.lname.trim()) tempErrors.lname = "Last name is required";
    if (!formData.age) tempErrors.age = "Age is required";
    else if (formData.age < 4 || formData.age > 100)
      tempErrors.age = "Age must be between 4 and 100";
    if (!formData.gender) tempErrors.gender = "Select your gender";
    if (!formData.email) tempErrors.email = "Email is required";
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email))
        tempErrors.email = "Enter a valid email address";
    }
    if (!formData.password) tempErrors.password = "Password is required";
    else if (formData.password.length < 6)
      tempErrors.password = "Password must be at least 6 characters";
    if (!formData.course) tempErrors.course = "Select a course";
    if (!formData.package) tempErrors.package = "Select a package";
    if (!formData.language) tempErrors.language = "Select a language";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (validate()) {
      alert(
        `Thank you, ${formData.fname} ${formData.lname}, for registering at Quran Academy!`
      );
      handleReset();
      setErrors({});
    }
  };

  const handleReset = () => {
    setFormData({
      fname: "",
      lname: "",
      age: "",
      gender: "",
      email: "",
      password: "",
      course: "",
      package: "",
      language: "",
    });
    setErrors({});
  };

  const changeHeading = () => setHeading("Online Quran Registration");

  // ===== Key Down Handler for Ctrl+S & Ctrl+Esc =====
  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === "s") {
      e.preventDefault(); // Prevent browser "save page"
      handleSubmit();
    } else if (e.ctrlKey && e.key === "x") {
      e.preventDefault(); // Optional: prevent any default
      handleReset();
    }
  };

  return (
    <div className="registration-page">
      <h1>{heading}</h1>
      <h3>
        Students must fill out the form below to register for <b>Quran Academy</b>.
      </h3>

      <div className="center">
        <button onClick={changeHeading}>Change Heading</button>
      </div>

      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        {/* Personal Information */}
        <fieldset>
          <legend>Personal Information</legend>

          <label>First Name:</label>
          <input
            type="text"
            name="fname"
            placeholder="Enter First Name"
            value={formData.fname}
            onChange={handleChange}
          />
          {errors.fname && <span className="error">{errors.fname}</span>}
          <br /><br />

          <label>Last Name:</label>
          <input
            type="text"
            name="lname"
            placeholder="Enter Last Name"
            value={formData.lname}
            onChange={handleChange}
          />
          {errors.lname && <span className="error">{errors.lname}</span>}
          <br /><br />

          <label>Age:</label>
          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            min="4"
            max="100"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <span className="error">{errors.age}</span>}
          <br /><br />

          <label>Gender:</label>
          <div className="radio-group">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            <label>Male</label>

            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            <label>Female</label>
          </div>
          {errors.gender && <span className="error">{errors.gender}</span>}
          <br /><br />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="abc@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <br /><br />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </fieldset>

        {/* More Information */}
        <fieldset>
          <legend>More Information</legend>

          <label>Course:</label>
          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="">Select Course</option>
            <option value="Qaida">Qaida</option>
            <option value="Tajweed">Tajweed</option>
            <option value="Hifz">Hifz</option>
          </select>
          {errors.course && <span className="error">{errors.course}</span>}
          <br /><br />

          <label>Package:</label>
          <select name="package" value={formData.package} onChange={handleChange}>
            <option value="">Select Package</option>
            <option value="basic">Basic</option>
            <option value="std">Standard</option>
            <option value="pre">Premium</option>
          </select>
          {errors.package && <span className="error">{errors.package}</span>}
          <br /><br />

          <label>Language:</label>
          <select name="language" value={formData.language} onChange={handleChange}>
            <option value="">Select Language</option>
            <option value="eng">English</option>
            <option value="urd">Urdu/Hindi</option>
            <option value="bi">Both (English, Urdu/Hindi)</option>
          </select>
          {errors.language && <span className="error">{errors.language}</span>}
        </fieldset>

        {/* Submit / Reset */}
        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <input type="submit" value="Submit" />
          &nbsp;
          <input type="reset" value="Reset" onClick={handleReset} />
        </div>
      </form>

      <p style={{ textAlign: "center", marginTop: "15px" }}>
        Already Registered? <b>Contact Us</b> for more information.
      </p>
    </div>
  );
};

export default Registration;
