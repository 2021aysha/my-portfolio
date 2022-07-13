import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/eliyas.JPG";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      name: "Jennifer Lowrence",
      profession: "CEO at RedIT",
      review:
        "Punctual, Dedicated, Honest and good communication skill. She is really an amazing Web Developer.Highly recommended",
    },
    {
      img: profilePic2,
      name: "Eliyas Hossain",
      profession: "Admin at LineUp",
      review:
        "Very recommended!! Did a great job, She is very expert,very patient and bring us great deliveries. I will hire her in the future again for sure!",
    },
    {
      img: profilePic4,
      name: "Daniel ",
      profession: "Manage at PurpleIT",
      review:
        "Very recommended!! Did a great job, She is very expert,very patient and bring us great deliveries. I will hire her in the future again for sure!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <p style={{ marginBottom: "5px" }}>{client?.name}</p>
                <small style={{ fontSize: "14px", color: "gray" }}>
                  {client?.profession}
                </small>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
