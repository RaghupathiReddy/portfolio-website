import React from 'react'
import LeftBanner from './LeftBanner';
import './Banner.css'
const Banner = () => {
  return (
    <section
      id="home"
      className="border-b-[1px] border-b-black flex font-titleFont justify-content-center align-items-center pt-10 w-full banner-height"
    >
      <LeftBanner />
    </section>
  );
}

export default Banner