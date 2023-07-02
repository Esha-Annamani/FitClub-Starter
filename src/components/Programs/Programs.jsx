import React from 'react'
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
export const Programs = () => {
  return (
    <div className="programs" id="programs">
        <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>To Shape You</span>
        </div>

        <div className="program-categories">
            {programsData.map((programData)=>(
                <div className="category"> 
                    {programData.image} 
                    <span>{programData.heading}</span>
                    <span>{programData.details}</span>
                    <div className='join-now'>
                        <span>Join Now</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}
export default Programs;
