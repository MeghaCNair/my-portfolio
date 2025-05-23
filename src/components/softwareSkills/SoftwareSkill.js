import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className="software-skills-main-div">
      <div className="skills-grid">
        {skillsSection.softwareSkills.map((skillCategory, i) => {
          return (
            <div key={i} className="flip-card">
              <div className="flip-card-inner">
                {/* Front of card */}
                <div className="flip-card-front">
                  <div className="skill-category-header">
                    <i className={skillCategory.fontAwesomeClassname}></i>
                    <h3>{skillCategory.skillName}</h3>
                  </div>
                  <div className="card-description">
                    <p>Hover to see skills</p>
                  </div>
                </div>
                
                {/* Back of card */}
                <div className="flip-card-back">
                  <h3>{skillCategory.skillName} Skills</h3>
                  <div className="skill-items">
                    {skillCategory.listOfSkills.map((skill, j) => (
                      <div key={j} className="skill-item">
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
