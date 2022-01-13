import React from "react";
import "./EngineeringCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function EngineeringCard({ repo, theme }) {
  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={repo.id}
          style={{ backgroundColor: theme.projectCard }}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={require(`../../assets/portfolioPDFs/${repo.url}`)}
            style={{ textDecoration: "none" }}
          >
            <div className="repo-name-div">
              <p className="repo-name" style={{ color: theme.text }}>
                {repo.name}
              </p>
            </div>
            <div className="repo-software" style={{ color: theme.text }}>
              <img
                className="engineering-card-logo"
                src={require(`../../assets/images/${repo.img}`)}
                alt=""
                width="75%"
                position="bottom"
              />

              <p className="repo-description" style={{ color: theme.text }}>
                {repo.description}
                <br />
                <br />
                <br />
                Software used: {repo.software}
              </p>
            </div>
          </a>
        </div>
      </Fade>
    </div>
  );
}
