import React from 'react';
import "./serviceTab.css";
import { BiDumbbell } from "react-icons/bi";

const ServiceTab = ({ title, description }) => {
  return (
    <>
      <div className="service-tab">
        <div className="service-tab_icon-wrap">
          <div className="service-tab_icon">
            <BiDumbbell color='black' size={24}/>
          </div>
        </div>
        <div className="service-tab_text">
          <p><span>{title}</span></p>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}

export default ServiceTab