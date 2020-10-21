import React from 'react';
import './Product.css';
import SmartLogo from './SmartLogo.png';

function Product({ imgUrl, discount, oldPrice, price, description }) {
  return (
    <div className="product">
      <img src={imgUrl} alt="" />
      <div className="product__description">
        <div className="products__discountContainer">
          <div className="product__discount">{discount}</div>
          <div className="product__oldPrice">{oldPrice}</div>
        </div>
        <p className="product__price">
          {price}
          <span>,00 zł</span>
        </p>
        <div className="product__smartLogo">
          <img src={SmartLogo} alt="" />
          <p>z kurierem</p>
        </div>
        <p className="product__descriptionTitle">{description}</p>
      </div>
    </div>
  );
}

export default Product;
