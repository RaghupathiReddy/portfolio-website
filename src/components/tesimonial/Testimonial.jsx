import React,{useState} from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
import { Achievements } from './Achievements';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="cursor-pointer d-flex h-12 justify-center text-2xl z-10 "
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="cursor-pointer d-flex h-12 justify-center text-2xl z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
     const [dotActive, setDocActive] = useState(0);
     const settings = {
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       nextArrow:<SampleNextArrow />,
       prevArrow:<SamplePrevArrow />,
       beforeChange: (prev, next) => {
         setDocActive(next);
       },
     };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="Achievements"/>
      </div>
      <div class="row">
        <div class="odd col-md-10 col-sm-8 col-4 mt-20">
          <ul class="achievements-list">
            <li>Star of the Month, Innova Solutions(2019)</li>
            <li>Spot Bonus, GGK Tech(2018)</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          { Achievements.map((ach) => {
            return (<div className="w-full" key={ach}>
              <blockquote className="recommendation-message">
                <i style={{color: "white"}}>
                 {ach.message}
                </i>
                <footer className="recommendation-footer mt-4">
                  --- {ach.from}
                  <span className="recommendation-source">Source: {ach.source}</span>
                </footer>
              </blockquote> 
            </div>)
          })}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial