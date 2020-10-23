import React from 'react';
import './Choosen.css';
import SmartLogo from './SmartLogo.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Choosen({ id, imgUrl, discount, oldPrice, price, description }) {
  const [{ product }, dispatch] = useStateValue();

  const openProduct = () => {
    dispatch({
      type: 'OPEN_PRODUCT',
      item: {
        id: id,
        description: description,
        imgUrl: imgUrl,
        price: price,
        discount: discount,
        oldPrice: oldPrice,
      },
    });
  };

  return (
    <div className="choosen">
      <div className="choosen__title">Okazja wybrana dla Ciebie</div>
      <div className="choosen__offer">
        <Link
          onClick={openProduct}
          to="/product"
          style={{ textDecoration: 'none', color: 'inherit' }}>
          <img className="choosen__offerImage" src={imgUrl} alt="" />
        </Link>
        <div className="choosen__offerDescription">
          <div className="choosen__offerDiscount">
            <div className="choosen__offerPercentage">{discount}</div>
            <div className="choosen__offerOld">{oldPrice}</div>
          </div>
          <div className="choosen__price">
            <div className="choosen__offerPrice">
              {price},<span>99 zł</span>
            </div>
            <img src={SmartLogo} alt="" className="choosen__offerPriceImage" />
          </div>
          <div className="choosen__offerProduct">{description}</div>
          <div className="choosen__offerBought">3089 osób kupiło</div>
        </div>
      </div>
      <div className="choosen__footer">Zobacz więcej okazji</div>
    </div>
  );
}

export default Choosen;
