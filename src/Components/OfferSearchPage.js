import React from 'react';
import SmartLogo from './SmartLogo.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function OfferSearchPage({
  img,
  discount,
  priceOld,
  price,
  description,
  bought,
  id,
}) {
  const [{ product }, dispatch] = useStateValue();

  const openProduct = () => {
    dispatch({
      type: 'OPEN_PRODUCT',
      item: {
        id: id,
        description: description,
        imgUrl: img,
        price: price,
      },
    });
  };

  return (
    <div>
      <Link
        onClick={openProduct}
        to="/product"
        style={{ textDecoration: 'none', color: 'inherit' }}>
        {' '}
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
      </Link>
    </div>
  );
}

export default OfferSearchPage;
