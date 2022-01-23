import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";
import { Fade } from "react-reveal";

import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import ContactImg from "./ContactImg";
import "./ContactComponent.css";

function Contact(props) {
  const theme = props.theme;
  const ContactData = contactPageData.contactSection;
  const blogSection = contactPageData.blogSection;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={`../../assets/images/${ContactData["profile_image_path"]}`}
                alt=""
              />
              <ContactImg theme={theme} />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={require(`../../assets/portfolioPDFs/${greeting.resumeLink}`)}
                style={{ textDecoration: "none" }}
              >
                See my Resume
              </a>
            </div>
          </div>
        </Fade>

        <br />
        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {blogSection["subtitle"]}
              </p>
              <div className="blogsite-btn-div">
                <a
                  {...styles}
                  className="general-btn"
                  href={blogSection.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  My Github Profile
                </a>
              </div>
            </div>
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
