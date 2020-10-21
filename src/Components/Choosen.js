import React from 'react';
import './Choosen.css';
import SmartLogo from './SmartLogo.png';

function Choosen() {
  return (
    <div className="choosen">
      <div className="choosen__title">Okazja wybrana dla Ciebie</div>
      <div className="choosen__offer">
        <img
          className="choosen__offerImage"
          src="https://www.komputronik.pl/informacje/wp-content/uploads/2020/03/ps5_premiera.jpg"
          alt=""
        />
        <div className="choosen__offerDescription">
          <div className="choosen__offerDiscount">
            <div className="choosen__offerPercentage">-20%</div>
            <div className="choosen__offerOld">2499,99 zł</div>
          </div>
          <div className="choosen__price">
            <div className="choosen__offerPrice">
              1999,<span>99 zł</span>
            </div>
            <img src={SmartLogo} alt="" className="choosen__offerPriceImage" />
          </div>
          <div className="choosen__offerProduct">Playstation 5</div>
          <div className="choosen__offerBought">3089 osób kupiło</div>
        </div>
      </div>
      <div className="choosen__footer">Zobacz więcej okazji</div>
    </div>
  );
}

export default Choosen;
