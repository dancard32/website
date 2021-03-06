import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import { style } from "glamor";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import EngineeringCard from "../../components/EngineeringCard/EngineeringCard";

import ProjectsImg from "./ProjectsImg";
import EngineeringImg from "./EngineeringImg";
import "./Projects.css";
import { projectsHeader, projects } from "../../portfolio.js";

const codingSection = projectsHeader.codingSection;
const engineeringSection = projectsHeader.engineeringSection;

function Projects(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {codingSection.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {codingSection["description"]}
              </p>

              <a
                {...styles}
                className="general-btn"
                href="https://github.com/dancard32"
                target="_Blank"
                rel="noopener noreferrer"
              >
                More Projects (Github){" "}
              </a>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {projects.coding.map((repo) => {
          return <ProjectCard repo={repo} theme={theme} />;
        })}
      </div>

      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {engineeringSection.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {engineeringSection["description"]}
              </p>
            </div>
            <div className="projects-heading-img-div">
              <EngineeringImg theme={theme} />
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-engr-cards-div-main">
        {projects.engr.map((repo) => {
          return <EngineeringCard repo={repo} theme={theme} />;
        })}
      </div>
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
