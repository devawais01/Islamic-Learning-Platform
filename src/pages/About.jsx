import { useEffect } from "react";

const About = () => {
  document.title = "Quran Academy - About";

  // Add JS mouseover/mouseout effects
  useEffect(() => {
    const addScale = (e) => e.currentTarget.classList.add("scale-hover");
    const removeScale = (e) => e.currentTarget.classList.remove("scale-hover");

    // Select headings, table, images
    const headings = document.querySelectorAll("h1, h2, h3");
    const table = document.querySelector("table");
    const images = document.querySelectorAll("table img");

    headings.forEach((el) => {
      el.addEventListener("mouseover", addScale);
      el.addEventListener("mouseout", removeScale);
    });

    if (table) {
      table.addEventListener("mouseover", addScale);
      table.addEventListener("mouseout", removeScale);
    }

    images.forEach((img) => {
      img.addEventListener("mouseover", addScale);
      img.addEventListener("mouseout", removeScale);
    });

    // Cleanup
    return () => {
      headings.forEach((el) => {
        el.removeEventListener("mouseover", addScale);
        el.removeEventListener("mouseout", removeScale);
      });
      if (table) {
        table.removeEventListener("mouseover", addScale);
        table.removeEventListener("mouseout", removeScale);
      }
      images.forEach((img) => {
        img.removeEventListener("mouseover", addScale);
        img.removeEventListener("mouseout", removeScale);
      });
    };
  }, []);

  return (
    <div className="about-page">
      {/* Page Heading */}
      <h1>About Quran Academy</h1>

      {/* Mission */}
      <h2>Our Mission</h2>
      <p>
        <b>Quran Academy</b> is an online platform that helps students learn the
        Holy Quran from certified and experienced teachers. Our mission is to
        spread the message of Islam globally with sincerity, dedication, and
        excellence in education.
      </p>

      {/* Vision */}
      <h2>Our Vision</h2>
      <p>
        To empower students of all ages to read, memorize, and understand the
        Quran with proper Tajweed, while making Quran education accessible
        worldwide.
      </p>

      {/* Teachers Section */}
      <h2>Our Teachers</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Experience</th>
            <th>Specialization</th>
            <th>Profile</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alim Ahmed</td>
            <td>08 Years</td>
            <td>Tajweed</td>
            <td>
              <img
                src="/images/Maulana Tariq Jameel.jpg"
                alt="Alim Ahmed"
                width="120"
                height="120"
              />
            </td>
          </tr>

          <tr>
            <td>Alima Kinza Ahmed</td>
            <td>04 Years</td>
            <td>Qaida & Nazra</td>
            <td>
              <img
                src="/images/muslim women.jpg"
                alt="Alima Kinza Ahmed"
                width="120"
                height="120"
              />
            </td>
          </tr>

          <tr>
            <td>Hafiz Abubakar</td>
            <td>05 Years</td>
            <td>Hifz</td>
            <td>
              <img
                src="/images/junaid jamshaid.jpg"
                alt="Hafiz Abubakar"
                width="120"
                height="120"
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Call to Action */}
      <p>
        For more details or enrollment, please visit our <b>Contact Us</b> page.
      </p>
    </div>
  );
};

export default About;
