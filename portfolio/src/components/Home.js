import React from "react";
import "../css/home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  const ClickResume = () => {
    window.open("https://drive.google.com/file/d/1QWySDf4QqFNOC6GSCRrFPjLHEG_N0si0/view?usp=sharing");
  }
  return (
    <div>
      <div className="ground">
        <div className="contact-container">
          <div className="content-ffn">
          <p>Welcome!!!</p>
            <div className="photo"></div>
          </div>
          <div className="about-cs">
            <h1>
              Hello, I'm <br />
              <span className="typewriter-software">
                <Typewriter
                  options={{
                    strings: ["Pravin Shanmugavel", "Software Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p style={{ marginTop: "7%" }}>
              .............I am a motivated and versatile individual, always
              eager to take on new challenges. With a passion for learning I am
              dedicated to delivering high-quality results. With a positive
              attitude and a growth mindset, I am ready to make a meaningful
              contribution and achieve great things.
            </p>
            <div className="resume">
            <button className="resume-button" onClick={ClickResume}>Check Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
