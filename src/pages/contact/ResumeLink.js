import React from "react";
import { style } from "glamor";
import "./ContactComponent.css";

export default function ResumeLink({ repo, theme }) {
  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div>
      <a
        {...styles}
        className="general-btn"
        target="_blank"
        rel="noopener noreferrer"
        href={require(`../../assets/portfolioPDFs/${repo.resumeLink}`)}
        style={{ textDecoration: "none" }}
      >
        See my Resume
      </a>
    </div>
  );
}
