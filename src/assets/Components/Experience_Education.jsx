import React from "react";
import "./Experience_Education.css";

const Experience_Education = ({ title, details }) => {
  return (
    <div className="container">
      <h3 className="section-title">{title}</h3>
      {details.map((item, index) => (
        <div key={index} className="card-content">
          <h4 className="card-title">{item.role || item.degree}</h4>
          <p className="card-company">{item.company || item.institution}</p>
          <p className="card-duration">{item.duration}</p>
          {item.description && (
            <p className="card-description">{item.description}</p>
          )}
          {item.coursework && (
            <p className="card-coursework">
              <b>Relevant Coursework:</b> {item.coursework}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experience_Education;
