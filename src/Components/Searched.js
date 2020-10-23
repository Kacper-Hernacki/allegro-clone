import React from 'react';
import './Searched.css';
import SmartLogo from './SmartLogo.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Searched({ id, imgUrl, price, description, bought, username }) {
  const [{ product }, dispatch] = useStateValue();

  const openProduct = () => {
    dispatch({
      type: 'OPEN_PRODUCT',
      item: {
        id: id,
        description: description,
        imgUrl: imgUrl,
        price: price,
      },
    });
  };

  return (
    <Link
      onClick={openProduct}
      to="/product"
      style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="searched">
        <img src={imgUrl} alt="" />
        <div className="searched__description">
          <p>{description}</p>
          <b>
            <span>Stan: </span> nowy
          </b>
          <hr />
          <b>
            <span>Sprzedający: </span>
            {username}
          </b>
          <div className="searched__price">
            <p className="searched__priceAmount">
              {price}
              <span>,00 zł</span>
            </p>
            <div className="searched__smartLogo">
              <img src={SmartLogo} alt="" />
              <p>z kurierem</p>
            </div>
          </div>
          <div className="searched__offerBought">{bought} osób kupiło</div>
          <Link
            to="/cart"
            style={{ textDecoration: 'none', color: 'inherit' }}></Link>
        </div>
      </div>
    </Link>
  );
}

export default Searched;
