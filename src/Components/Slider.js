import React from 'react';
import './Slider.css';

function Slider() {
  return (
    <div className="slider">
      <img
        className="slider__image"
        src="https://a.allegroimg.com/original/125808/958819ac42489210cb54c6943b39"
        alt=""
      />
      <div className="slider__description">
        <div className="slider__descriptionTitle">Pranie do -53%</div>
        <div className="slider__descriptionTitle">Płać kartą</div>
        <div className="slider__descriptionTitle">Kup na zapas do -48%</div>
        <div className="slider__descriptionTitle">PyrkONline</div>
        <div className="slider__descriptionTitle slider__descriptionTitle--active">
          Pilarki łańcuchowe
        </div>
      </div>
    </div>
  );
}

export default Slider;
