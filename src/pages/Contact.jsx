import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
 document.title="Quran Academy - Contact"
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}`);
    setFormData({ name: "", email: "", message: "" });
  };
 // ===== JS hover handlers =====
  const addScale = (e) => {
    e.currentTarget.classList.add("scale-hover");
  };

  const removeScale = (e) => {
    e.currentTarget.classList.remove("scale-hover");
  };

  return (
    <div className="contact-page">
      <h1 onMouseOver={addScale} onMouseOut={removeScale}>Contact Us</h1>
      <h3>We are here to help you! Reach out via email or our social media platforms.</h3>

      <div className="contact-info">
  <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="youtube">
    <FontAwesomeIcon icon={faYoutube} />
  </a>
  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="facebook">
    <FontAwesomeIcon icon={faFacebook} />
  </a>
  <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="twitter">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
</div>


      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Message:</label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

       <div style={{ textAlign: "center" }}>
          <button type="submit">Send Message</button>
        </div>
      </form>

      <h2 onMouseOver={addScale} onMouseOut={removeScale}>Our Location</h2>
     
      <div className="map-container">
  <img src="/images/fssgooglemaps.png" alt="Map" />
</div>

     
    </div>
  );
};

export default Contact;
