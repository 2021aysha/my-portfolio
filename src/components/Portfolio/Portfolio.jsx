import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import project1 from "../../img/project-2.png";
import project2 from "../../img/project-1.png";
import project3 from "../../img/project-3.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="portfolio-slider"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 65,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 65,
          },
        }}
      >
        <SwiperSlide>
          <img src={project1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project3} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
