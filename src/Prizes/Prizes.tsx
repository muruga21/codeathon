
import React from "react";
import bronze from "../assets/images/bronze.png";
import silver from "../assets/images/silver.png";
import gold from "../assets/images/gold.png";
import "./Prizes.css"; 

const Prizes = () => {
  return (
    <div className="prizes-container ">
      
      <h1 className="prizes-heading">
        🏆 <span>Prizes</span> 🏆
      </h1>

    
      <div className="prizes-wrapper ">
        
        <div className="prize-box silver-box">
          <div className="prize-amount">₹25,000</div>
          <div className="prize-image-wrapper">
            <img src={silver} alt="2nd Prize" className="prize-image" />
          </div>
          <p className="prize-title">2nd Prize</p>
        </div>

       
        <div className="prize-box gold-box">
          <div className="prize-amount">₹50,000</div>
          <div className="prize-image-wrapper">
            <img src={gold} alt="1st Prize" className="prize-image" />
          </div>
          <p className="prize-title">1st Prize</p>
        </div>

        
        <div className="prize-box bronze-box">
          <div className="prize-amount">₹10,000</div>
          <div className="prize-image-wrapper">
            <img src={bronze} alt="3rd Prize" className="prize-image" />
          </div>
          <p className="prize-title">3rd Prize</p>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
