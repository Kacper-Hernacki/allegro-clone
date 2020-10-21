import React from 'react';
import './ProductRow.css';
import SmartLogo from './SmartLogo.png';

function ProductRow({ imgUrl, price, description, bought }) {
  return (
    <div className="productRow">
      <img className="productRow__image" src={imgUrl} alt="" />
      <div className="productRow__description">
        <div className="productRow__price">
          <div className="productRow__offerPrice">
            {price}
            <span>,00 zł</span>
          </div>
          <img src={SmartLogo} alt="" className="productRow__offerPriceImage" />
        </div>
        <div className="productRow__offerProduct">{description}</div>
        <div className="productRow__offerBought">{bought} osób kupiło</div>
      </div>
    </div>
  );
}

export default ProductRow;
