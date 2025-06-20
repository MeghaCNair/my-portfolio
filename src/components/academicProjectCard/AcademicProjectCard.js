import React, { useState } from "react";
import "./AcademicProjectCard.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-reveal";

export default function AcademicProjectCard({ projects, isDark }) {
  const [expandedCards, setExpandedCards] = useState({});

  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const toggleDetails = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          centerMode: false,
          centerPadding: '0',
          adaptiveHeight: true
        }
      }
    ]
  };

  return (
    <div className="project-cards-div">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Fade bottom duration={1000} distance="20px" key={index}>
            <div className="project-card-slider">
              <div className={isDark ? "dark-mode project-card" : "project-card"}>
                <div className="project-card-header">
                  <div className="title-container">
                    <h3 className={isDark ? "dark-mode project-title" : "project-title"}>
                      {project.title}
                    </h3>
                    {project.inProgress && (
                      <span className="in-progress-flag">
                        <i className="fas fa-clock"></i>
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className={isDark ? "dark-mode project-subtitle" : "project-subtitle"}>
                    {project.subtitle}
                  </p>
                </div>
                
                <div className={`project-card-body ${expandedCards[index] ? 'expanded' : ''}`}>
                  <div className="project-details-preview">
                    {project.techStack && (
                      <div className="tech-stack">
                        {project.techStack.map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className={`project-details-full ${expandedCards[index] ? 'show' : ''}`}>
                    <ul className="project-details">
                      {project.details.map((detail, i) => (
                        <li key={i} className={isDark ? "dark-mode" : ""}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="project-card-footer">
                  <button 
                    className={`project-button ${isDark ? "dark-mode" : ""}`}
                    onClick={() => toggleDetails(index)}
                  >
                    {expandedCards[index] ? (
                      <>
                        <i className="fas fa-chevron-up"></i>
                        <span>Hide Details</span>
                      </>
                    ) : (
                      <>
                        <i className="fas fa-chevron-down"></i>
                        <span>View Details</span>
                      </>
                    )}
                  </button>
                  {project.github && (
                    <button
                      className={`project-button ${isDark ? "dark-mode" : ""}`}
                      onClick={() => openUrlInNewTab(project.github, "GitHub")}
                    >
                      <i className="fab fa-github"></i> View Code
                    </button>
                  )}
                  {project.demoUrl && (
                    <button
                      className={`project-button ${isDark ? "dark-mode" : ""}`}
                      onClick={() => openUrlInNewTab(project.demoUrl, "Demo")}
                    >
                      <i className="fas fa-external-link-alt"></i> Try it out
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
            </div>
          </Fade>
        ))}
      </Slider>
    </div>
  );
} 