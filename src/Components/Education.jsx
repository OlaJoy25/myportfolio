import React from "react";

import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const Education = () => {
  return (
    <section className="light" id="education">
      <h2>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
      </div>
    </section>
  );
};
const schoolList = [
  {
    name: "African Leadership University, Kigali, Rwanda",
    description: "Final year of BSC. Computer Science",
  },
];
<div className="container">
  {schoolList.map((school) => (
    <div className="box" key={school.name}>
      <p className="small">{school.description}</p>
    </div>
  ))}
</div>;

export default Education;
