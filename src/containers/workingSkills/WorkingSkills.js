import React from "react";
import "./WorkingSkills.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

function WorkingSkills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: theme.text }}>
            Skills
          </h1>
        </Fade>
      </div>
      <div className="certs-body-div">
        {certifications.skills.map((cert) => {
          return <CertificationCard certificate={cert} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default WorkingSkills;
