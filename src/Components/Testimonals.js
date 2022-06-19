/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "../Components/css/testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

const Testimonals = () => {
  return (
    <>
      <br />
      <br />
      <div className="container myswiper">
        <center>
          <h1>See What Our Customers Say About Us</h1>
        </center>
        <Swiper navigation={true} modules={[Navigation]} className="swiper">
          <SwiperSlide>
            <div className="user">
              <img src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg" />
              <span>Username</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="user">
              <img src="http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg" />
              <span>Username</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonals;
