// import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="page-container">
      <section id="about" className="p-8 about-section">
        <h1 className="text-4xl"><b>ABOUT</b></h1>
        <p className="welcome-text text-2xl">Building Sustainable Solutions For A Better Planet!</p>
        <p className="description text-lg">
          Join our <span className="highlight">CODEATHON</span> on Sustainable Development Goals, and design software solutions for a sustainable future.
        </p>
        <div className="flex flex-wrap justify-center gap-[5rem] md:gap-[8rem] mt-12">
          <div className="text-xl stat-item">
            <img src="/developer.png" alt="Developers" />
            <p className="stat-number">60+</p>
            <p className="stat-label">Developers</p>
          </div>
          <div className="text-xl stat-item">
            <img src="/projects.png" alt="Projects" />
            <p className="stat-number">30+</p>
            <p className="stat-label">Projects</p>
          </div>
          <div className="text-xl stat-item">
            <img src="/prizes.png" alt="Prizes" />
            <p className="stat-number">3</p>  
            <p className="stat-label">Prizes</p>
          </div>
          <div className="text-xl stat-item">
            <img src="/money.png" alt="Prize Pool" />
            <p className="stat-number">₹ 45,000</p>
            <p className="stat-label">Prize Pool</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
