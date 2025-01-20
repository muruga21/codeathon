// import React from "react";
import "./style.css";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="page-container">
      <section id="about" className="p-8 about-section">
        <h1 className="text-4xl"><b>ABOUT</b></h1>
        <p className="welcome-text text-2xl">🌍 Join Our CODEATHON For Shaping A Sustainable Future! 🌱</p>
        <p className="description text-lg">
  Join our <span className="highlight">CODEATHON</span> on Sustainable Development Goals and showcase your creativity by designing
  <span className="highlight"> innovative software solutions</span> for a sustainable future. Compete for an exciting 
  <span className="highlight"> ₹50,000 prize pool</span>, win <span className="highlight"> exclusive gifts</span>, 
  and collaborate with like-minded individuals to make a meaningful impact on global challenges like climate change, 
  clean energy, and education.
</p>
        <div className="flex flex-wrap justify-center gap-[5rem] md:gap-[8rem] mt-12">
          <div className="text-xl stat-item">
            <img src="/developer.svg" alt="Developers" />
            <p className="stat-number"><CountUp start={0} end={60} duration={3} suffix="+"/></p>
            <p className="stat-label">Developers</p>
          </div>
          <div className="text-xl stat-item">
            <img src="/projects.svg" alt="Projects" />
            <p className="stat-number"><CountUp start={0} end={30} duration={3} suffix="+"/></p>
            <p className="stat-label">Projects</p>
          </div>
          <div className="text-xl stat-item">
            <img src="/prizes.svg" alt="Prizes" />
            <p className="stat-number"><CountUp start={0} end={3} duration={3} suffix="+"/></p>
            <p className="stat-label">Prizes</p>
          </div>
          <div className="text-xl stat-item">
            <img src="/money.svg" alt="Prize Pool" />
            <p className="stat-number"><CountUp start={0} end={50000} duration={3} prefix="₹ " /></p>
            <p className="stat-label">Prize Pool</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
