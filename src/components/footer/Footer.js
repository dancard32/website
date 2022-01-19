import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import ScrollButton from "../scrollButton/ScrollButton";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title2}
        </p>
        <br />
        <br />
        <br />

        <ScrollButton />
        <p />
      </Fade>
    </div>
  );
}
