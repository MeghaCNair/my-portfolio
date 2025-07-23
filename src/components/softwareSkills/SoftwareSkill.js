import React, { useEffect, useRef, useState } from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";

// Skill icon mapping
const skillIcons = {
  // Programming Languages
  "Python": "fab fa-python",
  "JavaScript": "fab fa-js-square",
  "Java": "fab fa-java",
  "C++": "fas fa-code",
  "C#": "fas fa-code",
  "PHP": "fab fa-php",
  "Ruby": "fas fa-gem",
  "Go": "fas fa-code",
  "Rust": "fas fa-code",
  "Swift": "fab fa-swift",
  "Kotlin": "fas fa-code",
  "TypeScript": "fab fa-js-square",
  
  // Web Technologies
  "HTML": "fab fa-html5",
  "CSS": "fab fa-css3-alt",
  "React": "fab fa-react",
  "Angular": "fab fa-angular",
  "Vue.js": "fab fa-vuejs",
  "Node.js": "fab fa-node-js",
  "Express.js": "fas fa-server",
  "Django": "fab fa-python",
  "Flask": "fab fa-python",
  "Laravel": "fab fa-php",
  "Spring": "fab fa-java",
  
  // Databases
  "SQL": "fas fa-database",
  "MySQL": "fas fa-database",
  "PostgreSQL": "fas fa-database",
  "MongoDB": "fas fa-database",
  "Redis": "fas fa-database",
  "Oracle": "fas fa-database",
  "SQLite": "fas fa-database",
  
  // Cloud & DevOps
  "AWS": "fab fa-aws",
  "Azure": "fab fa-microsoft",
  "GCP": "fab fa-google",
  "Docker": "fab fa-docker",
  "Kubernetes": "fas fa-ship",
  "Jenkins": "fas fa-cogs",
  "Git": "fab fa-git-alt",
  "GitHub": "fab fa-github",
  "GitLab": "fab fa-gitlab",
  "Bitbucket": "fab fa-bitbucket",
  
  // Data Science & ML
  "Machine Learning": "fas fa-brain",
  "Deep Learning": "fas fa-brain",
  "TensorFlow": "fas fa-brain",
  "PyTorch": "fas fa-brain",
  "Scikit-learn": "fas fa-chart-line",
  "Pandas": "fas fa-table",
  "NumPy": "fas fa-calculator",
  "Matplotlib": "fas fa-chart-bar",
  "Seaborn": "fas fa-chart-line",
  "Jupyter": "fas fa-book",
  
  // Tools & Platforms
  "Tableau": "fas fa-chart-pie",
  "Power BI": "fas fa-chart-bar",
  "Excel": "fas fa-file-excel",
  "PowerPoint": "fas fa-file-powerpoint",
  "Word": "fas fa-file-word",
  "Slack": "fab fa-slack",
  "Trello": "fab fa-trello",
  "Jira": "fab fa-jira",
  "Confluence": "fab fa-confluence",
  "Notion": "fas fa-sticky-note",
  
  // Mobile & Desktop
  "Android": "fab fa-android",
  "iOS": "fab fa-apple",
  "React Native": "fab fa-react",
  "Flutter": "fas fa-mobile-alt",
  "Xamarin": "fab fa-microsoft",
  
  // Other Technologies
  "Linux": "fab fa-linux",
  "Ubuntu": "fab fa-ubuntu",
  "CentOS": "fab fa-centos",
  "Apache": "fas fa-server",
  "Nginx": "fas fa-server",
  "Firebase": "fas fa-fire",
  "Heroku": "fas fa-cloud",
  "Vercel": "fas fa-cloud",
  "Netlify": "fas fa-cloud",
  
  // Default fallback
  "default": "fas fa-code"
};

export default function SoftwareSkill() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionIndex = parseInt(entry.target.dataset.index);
          setVisibleSections((prev) => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) {
              newSet.add(sectionIndex);
            } else {
              newSet.delete(sectionIndex);
            }
            return newSet;
          });
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getSkillIcon = (skillName) => {
    return skillIcons[skillName] || skillIcons["default"];
  };

  return (
    <div className="software-skills-main-div">
      <div className="software-skills-container">
        {skillsSection.softwareSkills.map((skillCategory, i) => {
          const isVisible = visibleSections.has(i);
          
          return (
            <Fade bottom duration={800} distance="20px" delay={i * 150} key={i}>
              <div 
                className="skill-section"
                ref={(el) => (sectionRefs.current[i] = el)}
                data-index={i}
              >
                <div className="skill-category-header">
                  <i className={skillCategory.fontAwesomeClassname}></i>
                  <h3>{skillCategory.skillName}</h3>
                </div>
                
                <div className={`skill-tags ${isVisible ? 'visible' : 'fallback-visible'}`}>
                  {skillCategory.listOfSkills.map((skill, j) => (
                    <div 
                      key={j} 
                      className="skill-tag"
                      style={{
                        animationDelay: `${j * 50}ms`
                      }}
                    >
                      <i className={getSkillIcon(skill)}></i>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
}
