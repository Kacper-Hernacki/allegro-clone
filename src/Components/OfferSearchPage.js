import React from 'react';
import SmartLogo from './SmartLogo.png';

function OfferSearchPage({
  img,
  discount,
  priceOld,
  price,
  description,
  bought,
}) {
  return (
    <div>
      <div className="sponsored__offer">
        <img className="sponsored__offerImage" src={img} alt="" />
        <div className="sponsored__offerDescription">
          <div className="sponsored__offerDiscount">
            <div className="sponsored__offerPercentage">- {discount} %</div>
            <div className="sponsored__offerOld">{priceOld},99 zł</div>
          </div>
          <div className="sponsored__price">
            <div className="sponsored__offerPrice">
              {price},<span>99 zł</span>
            </div>
            <img
              src={SmartLogo}
              alt=""
              className="sponsored__offerPriceImage"
            />
          </div>
          <div className="sponsored__offerProduct">{description}</div>
          <div className="sponsored__offerBought">{bought} osób kupiło</div>
        </div>
      </div>
    </div>
  );
}

export default OfferSearchPage;
