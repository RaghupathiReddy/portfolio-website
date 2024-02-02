import React from 'react'
import { FaLinkedinIn, FaReact,FaNodeJs, FaJava } from "react-icons/fa";
import { SiPython,SiExpress,SiRubyonrails,SiGmail } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">

            <span className="bannerIcon">
            <a href="mailto:allapuram.raghupathi@gmail.com">
              <SiGmail /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/raghupathi-reddy-b5314a1a3/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST WEB STACK
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <SiRubyonrails />
            </span>
            <span className="bannerIcon">
              <SiPython />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media