import React from "react";
import "./engineeringSoftwares.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function EngineeringSoftwares(props) {
  return (
    <div>
      <div className="engr-software-skills-main-div">
        <ul className="dev-icons-languages">
          {props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.name}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.name}</strong>
                  </Tooltip>
                }
              >
                <li
                  className="engr-software-skill-inline-languages"
                  name={logo.name}
                >
                  <img
                    className="engineering-card-logo"
                    src={require(`../../assets/images/${logo.img_path}`)}
                    alt=""
                    height="25em"
                    position="bottom"
                  />
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default EngineeringSoftwares;
