import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import "./HomeComponent.css";

function Home(props) {
  return (
    <div className="home-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-home">
        <Greeting theme={props.theme} />
        <Skills theme={props.theme} />
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
