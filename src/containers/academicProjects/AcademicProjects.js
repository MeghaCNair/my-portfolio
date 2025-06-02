import React, {useContext} from "react";
import "./AcademicProjects.scss";
import AcademicProjectCard from "../../components/academicProjectCard/AcademicProjectCard";
import {academicProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function AcademicProjects() {
  const {isDark} = useContext(StyleContext);

  if (!academicProjects.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div className="academic-projects-header">
          <h1 className="academic-projects-header-text">
            {academicProjects.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode academic-projects-subtitle"
                : "subTitle academic-projects-subtitle"
            }
          >
            {academicProjects.subtitle}
          </p>
        </div>
        <div className="academic-projects-main-div">
          <div className="academic-projects-text-div">
            <AcademicProjectCard
              projects={academicProjects.projects}
              isDark={isDark}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
} 