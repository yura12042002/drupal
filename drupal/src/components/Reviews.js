import React, { useState } from "react";
import "../styles/reviews.css";
import { reviews } from "../data/reviews";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [review, setReview] = useState(reviews[currentIndex]);

  const goToPrevious = () => {
    const isFirstReview = currentIndex === 0;
    const newIndex = isFirstReview ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setReview(reviews[newIndex]);
  };

  const goToNext = () => {
    const isLastReview = currentIndex === reviews.length - 1;
    const newIndex = isLastReview ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setReview(reviews[newIndex]);
  };

  return (
    <div className="reviews">
      <div className="reviewsBlock">
        <h2 className="reviewsBlockTitle">Отзывы</h2>
        <div className="reviewsBlockSlider">
          <div className="reviewsBlockSliderFirst"></div>
          <div className="reviewsBlockSliderSecond"></div>
          <div className="reviewsBlockSliderThird">
            <div className="reviewsBlockSliderThirdInfo">
              <img
                className="reviewsBlockSliderThirdLogo"
                src={review.img}
                alt="logo"
              />
              <p className="reviewsBlockSliderThirdText">{review.text}</p>
              <p className="reviewsBlockSliderThirdTextOrganization">
                {review.organization}
              </p>
            </div>
            <div className="reviewsBlockSliderThirdSwitch">
              <div className="reviewsBlockSliderThirdSwitchBlock">
              <button className="reviewsButton" onClick={goToPrevious}><IoIosArrowBack /></button>
              <p  className="somthing">{review.id} {<span className="reviewsLength">/ {reviews.length}</span>}</p>
              <button className="reviewsButton" onClick={goToNext}><IoIosArrowForward /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
