import React from "react";
import "./Projects.css";

const Projects = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-link"
    >
      <div className="container">
        <div className="image-container">
          <img
            src={props.image}
            alt="Project Thumbnail"
            className="card-image"
          />
          <div className="overlay">View Project</div>
        </div>
        <div className="card-content">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-description">{props.description}</p>
          <p className="card-technologies">
            <b>Technologies:</b> {props.technologies}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Projects;
