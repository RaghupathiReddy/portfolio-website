import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex flex-col">
      <div className="flex flex-col">
        <h4 className=" text-lg font-normal">Hi Friends</h4>
        <h1 className="text-4xl font-bold text-white">
          I'm <span className="text-designColor capitalize">Raghupathi Reddy Allapuram</span>
        </h1>
        <h2 className="text-2xl font-bold text-white">
          Senior Software Engineer | Innova Solutions
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        "I am a passionate full stack developer with strong foundation in object oriented programming languages and web development"
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner