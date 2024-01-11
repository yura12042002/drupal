import React from "react";
import "../styles/partner.css";
import { reviews } from "../data/reviews";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Partner() {
  const loopedReviews = Array(1).fill(reviews).flat();
  const loopedReviewsSecond = Array(1).fill(reviews).flat().reverse();

  const settings = {
    mobileFirst: false,
    autoplay: true,
    infinite: true,
    pauseOnHover: false,
    arrows: false,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: "10%",
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
          pauseOnHover: false,
          arrows: false,
          slidesToShow: 3,
          waitForAnimate: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          pauseOnHover: false,
          arrows: false,
          slidesToShow: 2,
          waitForAnimate: false,
        },
      },
    ],
  };

  const settingsSecondSlider = {
    ...settings,
    rtl: true,
  };

  return (
    <div className="partner">
      <div className="partnerBlock">
        <h2 className="partnerBlockTitle">С нами работают</h2>
        <p className="partnerBlockText">
          Десятки компаний доверяют нам самое ценное, что у них есть в интернете
          – свои сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.
        </p>
        <div className="partnerBlockFirst">
          <Slider {...settings}>
            {loopedReviews.map((el) => (
              <div className="partnerBlockSlider" key={el.id}>
                <img
                  width={150}
                  className="partnerBlockSliderInclude"
                  src={el.img}
                  alt="logo"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <Slider {...settingsSecondSlider}>
            {loopedReviewsSecond.map((el) => (
              <div className="partnerBlockSlider" key={el.id}>
                <img
                  width={150}
                  className="partnerBlockSliderInclude"
                  src={el.img}
                  alt="logo"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Partner;
