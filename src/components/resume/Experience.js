import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

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
