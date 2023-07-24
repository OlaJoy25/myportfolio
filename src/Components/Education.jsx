import React from "react";

const Education = () => {
  return (
    <section className="light" id="education">
      <h2>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}></div>
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
