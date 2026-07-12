import { useState } from "react";

const Home = () => {
  const [headingText, setHeadingText] = useState(
    "Welcome to Al-Mushaf Quran Academy"
  );

  document.title = "Quran Academy - Home";
 
  const [courses, setCourses] = useState([
    "Qaida (Basic Quran Reading)",
    "Tajweed (Rules of Recitation)",
    "Hifz (Memorization Program)",
  ]);

  const [newCourse, setNewCourse] = useState("");

  // ===== JS hover handlers =====
  const addScale = (e) => {
    e.currentTarget.classList.add("scale-hover");
  };

  const removeScale = (e) => {
    e.currentTarget.classList.remove("scale-hover");
  };

  const toggleHeading = () => {
    setHeadingText(
      headingText === "Welcome to Al-Mushaf Quran Academy"
        ? "Welcome to Online Quran Learning 🕌"
        : "Welcome to Al-Mushaf Quran Academy"
    );
  };

  const addCourse = () => {
    if (newCourse.trim()) {
      setCourses([...courses, newCourse]);
      setNewCourse("");
    }
  };

 
  return (
    <div className="home-page">
      {/* Welcome Heading */}
      <h1 onMouseOver={addScale} onMouseOut={removeScale}>
        {headingText}
      </h1>

      <section className="center">
        <button   onClick={toggleHeading}>✏ Change Heading</button>
      </section>

      {/* Introduction */}
      <h2 onMouseOver={addScale} onMouseOut={removeScale}>
        Introduction
      </h2>
 
      <h3 onMouseOver={addScale} onMouseOut={removeScale}>
        Learn Quran Online with qualified Teachers
      </h3>

      <h3 onMouseOver={addScale} onMouseOut={removeScale}>
        Flexible Courses - Live & Recorded Lectures
      </h3>
      

      <p>
        Our <b>Quran Academy</b> teaches <i>Quran with Tajweed</i> and{" "}
        <i>Islamic values</i>.
      </p>

      {/* Courses */}
      <h2 onMouseOver={addScale} onMouseOut={removeScale}>
        Our Offered Courses
      </h2>

      <ul style={{ textAlign: "center", listStylePosition: "inside" }}>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>

      {/* Course Images */}
      <div style={{ textAlign: "center" }}>
        <img
          src="/images/Qaida_pic.png"
          alt="Qaida"
          onMouseOver={addScale}
          onMouseOut={removeScale}
        />
        <img
          src="/images/tajweed.jpg"
          alt="Tajweed"
          onMouseOver={addScale}
          onMouseOut={removeScale}
        />
        <img
          src="/images/hifz_pic.JPG"
          alt="Hifz"
          onMouseOver={addScale}
          onMouseOut={removeScale}
        />
      </div>

      {/* Add Course */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        <input style={{width:"30vw"}}
          type="text"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          placeholder="Enter new course"
        />
        <button onClick={addCourse}>➕ Add Course</button>
      </div>

      {/* ===== Learning Benefits (FIXED) ===== */}
      <h2 onMouseOver={addScale} onMouseOut={removeScale}>
        Learning Benefits
      </h2>

      <ol style={{ textAlign: "center", listStylePosition: "inside" }}>
        <li onMouseOver={addScale} onMouseOut={removeScale}>
          Certified & Experienced Teachers
        </li>
        <li onMouseOver={addScale} onMouseOut={removeScale}>
          Flexible Timings
        </li>
        <li onMouseOver={addScale} onMouseOut={removeScale}>
          Online One-to-One Classes
        </li>
      </ol>

      {/* Packages */}
      <h2 onMouseOver={addScale} onMouseOut={removeScale}>
        Our Packages
      </h2>

      <table onMouseOver={addScale} onMouseOut={removeScale}>
        <thead>
          <tr>
            <th>Package</th>
            <th>Duration</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic</td>
            <td>1 Month</td>
            <td>$10</td>
          </tr>
          <tr>
            <td>Standard</td>
            <td>3 Months</td>
            <td>$25</td>
          </tr>
          <tr>
            <td>Premium</td>
            <td>6 Months</td>
            <td>$45</td>
          </tr>
        </tbody>
      </table>

      {/* Video */}
      <h2 onMouseOver={addScale} onMouseOut={removeScale}>
        Watch a Sample Lecture
      </h2>

      <video
        src="/videos/sample_video.mp4"
        width="40%"
        controls
       
        onPlay={(e) => (e.currentTarget.style.border = "3px solid #45a247")}
        onPause={(e) => (e.currentTarget.style.border = "none")}
        onMouseOver={(e) => {
          addScale(e);
          e.target.play();
          
        }}
        onMouseOut={(e) => {
          removeScale(e);
          e.target.pause();
          e.target.currentTime = 0;
        }}
      />

      {/* Audio */}
      <h2 onMouseOver={addScale} onMouseOut={removeScale}>
        Listen to Quran Recitation
      </h2>

      <audio
        src="/audio/Audio-01.mp3"
        controls
        onPlay={(e) => (e.currentTarget.style.border = "3px solid #36d1dc")}
        onPause={(e) => (e.currentTarget.style.border = "none")}
        onMouseOver={(e) => {
          addScale(e);
          e.target.play();
         
        }}
        onMouseOut={(e) => {
          removeScale(e);
          e.target.pause();
          e.target.currentTime = 0;
        }}
      />

      <br />
    </div>
  );
};

export default Home;
