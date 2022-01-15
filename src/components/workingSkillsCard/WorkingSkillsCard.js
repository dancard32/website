import React from "react";
import "./WorkingSkillsCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

function WorkingSkillsCard(props) {
  const certificate = props.certificate;
  const theme = props.theme;
  const styles = style({
    boxShadow: `0px 2px 5px ${certificate.color_code}`,
    border: `1px solid ${certificate.color_code}`,
    ":hover": {
      boxShadow: `0 5px 15px ${certificate.color_code}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="20px">
      <div className="work-skills-card" {...styles}>
        <div className="content">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={certificate.certificate_link}
          >
            <div className="content-overlay"></div>
            <div
              className="work-skills-header"
              style={{ backgroundColor: certificate.color_code }}
            >
              <img
                className="logo_img"
                src={require(`../../assets/images/${certificate.logo_path}`)}
                alt={certificate.title}
              />
            </div>
            {/* <div className="content-details fadeIn-top">
									<h3 className="content-title" style={{ color: theme.body }}>
										Certificate
									</h3>
								</div> */}
          </a>
        </div>
        <div className="work-skills-body">
          <h2 className="work-skills-body-title" style={{ color: theme.text }}>
            {certificate.title}
          </h2>
          <h3
            className="work-skills-body-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {certificate.subtitle}
          </h3>
        </div>
      </div>
    </Fade>
  );
}

export default WorkingSkillsCard;
