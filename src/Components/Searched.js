import React from 'react';
import './Searched.css';
import SmartLogo from './SmartLogo.png';

function Searched({ imgUrl, price, description, bought }) {
  return (
    <div className="searched">
      <img src={imgUrl} alt="" />
      <div className="searched__description">
        <p>{description}</p>
        <b>
          <span>Stan: </span> nowy
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
        <button className="searched__addToBasket">DODAJ DO KOSZYKA</button>
      </div>
    </div>
  );
}

export default Searched;
