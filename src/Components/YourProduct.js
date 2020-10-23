import React from 'react';
import './YourProduct.css';

function YourProduct({ user, imgUrl, description, price }) {
  return (
    <div className="yourProduct">
      <img src={imgUrl} alt="" />
      <div className="yourProduct__description">
        <p>{description}</p>
        <b>
          <span>Stan: </span> nowy
        </b>
        <div className="yourProduct__price">
          <p className="yourProduct__priceAmount">{price} zł</p>
        </div>
      </div>
    </div>
  );
}

export default YourProduct;
