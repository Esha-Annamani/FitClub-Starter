import React from 'react';
import "./Plans.css";
import {plansData} from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
const Plans = () => {
  return (
    <div className="plans-container">
        <div className="blur blur-p-1"></div>
        <div className="blur blur-p-2"></div>
        <div className="programs-header" style={{gap: "2rem"}}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>

        {/* PLANS CARD */}
        <div className="plans" id="plans">
            {plansData.map((planData, i)=>(
                <div className="plan" key={i}>
                    {planData.icon}
                    <span>{planData.name}</span>
                    <span>$ {planData.price}</span>
                    <div className="features">
                        {planData.features.map((feature, i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>See more benefits -{'>'} </span>
                    </div>
                    <button className="btn">Join Now</button>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Plans