import React from "react";
import "./AcademicProjectCard.scss";

export default function AcademicProjectCard({project, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode project-card" : "project-card"}>
      <div className="project-card-header">
        <h3 className={isDark ? "dark-mode project-title" : "project-title"}>
          {project.title}
        </h3>
        <p className={isDark ? "dark-mode project-subtitle" : "project-subtitle"}>
          {project.subtitle}
        </p>
      </div>
      <div className="project-card-body">
        <ul className="project-details">
          {project.details.map((detail, i) => (
            <li key={i} className={isDark ? "dark-mode" : ""}>
              {detail}
            </li>
          ))}
        </ul>
      </div>
      <div className="project-card-footer">
        {project.github && (
          <button
            className={`project-button ${isDark ? "dark-mode" : ""}`}
            onClick={() => openUrlInNewTab(project.github, "GitHub")}
          >
            <i className="fab fa-github"></i> View Code
          </button>
        )}
        {project.presentation && (
          <button
            className={`project-button ${isDark ? "dark-mode" : ""}`}
            onClick={() => openUrlInNewTab(project.presentation, "Presentation")}
          >
            <i className="fas fa-file-powerpoint"></i> View Presentation
          </button>
        )}
      </div>
    </div>
  );
} 