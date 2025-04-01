import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <div>
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </div>
                <div>
                  {skills.listOfSkills.map((skillsubset, i) => {
                    return (
                      <div key={i} className="software-skill-subset">
                        <span>{skillsubset}</span>
                      </div>
                    )
                  }
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
