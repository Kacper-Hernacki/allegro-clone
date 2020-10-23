import React from 'react';
import './Sponsored.css';
import SmartLogo from './SmartLogo.png';
import OfferSearchPage from './OfferSearchPage';

function Sponsored() {
  return (
    <div className="sponsored">
      <div className="sponsored__row">
        <OfferSearchPage
          img="https://www.komputronik.pl/informacje/wp-content/uploads/2020/03/ps5_premiera.jpg"
          discount="20"
          priceOld="2499"
          price={1999}
          description="Playstation 5"
          bought="3089"
        />

        <OfferSearchPage
          img="https://stat-m2.ms-online.pl/media/cache/gallery_1090_800/images/20/20982520/apple-iphone-11-zielony-3.jpg"
          discount="10"
          priceOld="2999"
          price={2699}
          description="iphone 11"
          bought="86379"
        />
      </div>
    </div>
  );
}

export default Sponsored;
