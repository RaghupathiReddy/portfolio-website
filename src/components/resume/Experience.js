import React from "react";

import data from './Organizations';
import { Chrono } from "react-chrono";


import { cvrLogo, ggkLogo, innovaSolutions, kentLogo } from "../../assets";

const Experience = () => {
  return (
    <>
      <Chrono 
        items={data} 
        mode="VERTICAL_ALTERNATING" 
        scrollable="true" 
        slideShow 
        slideItemDuration={4500} 
        slideShowType="reveal"
        cardHeight="100px" 
        hideControls="true"
        disableClickOnCircle="true"
        controls={{
          controls: 'my-controls',
        }}
        >
          <div className="chrono-icons">
            <img src={kentLogo} className="timeline-image" />
            <img src={kentLogo} className="timeline-image" />
            <img src={innovaSolutions} className="timeline-image" />
            <img src={ggkLogo} className="timeline-image" />
            <img src={cvrLogo} className="timeline-image" />
          </div>
      </Chrono>
    </>
  );
};

export default Experience;
