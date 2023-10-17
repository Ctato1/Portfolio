import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Col } from "reactstrap";
import TestimonialCard from "../UI/TestimonialCard";

const Testimonial = ({ aboutData }) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: true,
    pauseOnHover: true,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          cssEase: "linear",
          arrows: false,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5500,
          cssEase: "linear",
          arrows: false,
          pauseOnHover: true,
        },
      },
    ],
  };

  return (
    <div className="cart__section-slider">
      <Slider {...settings}>
        {aboutData.map((item, index) => (
          <Col
            lg="12"
            id="cart__section-test"
            className="d-flex align-items-center justify-content-center"
            key={index}
          >
            <TestimonialCard
              key={item.id}
              id={item.id}
              title={item.title}
              imgUrl={item.imgUrl}
              experience={item.experience}
              color={item.color}
            />
          </Col>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
