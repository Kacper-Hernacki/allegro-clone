import React from 'react';
import './Occassions.css';
import Product from './Product';

function Occassions() {
  return (
    <div className="ocassions">
      <h2>Okazje dnia</h2>
      <div className="ocassions__container">
        <Product
          imgUrl="https://przemax.pl/10575-home_default/rea-milan-zestaw-natryskowy-z-deszczownica-i-bateria-termostatyczna-chrom.jpg"
          discount="-10%"
          oldPrice="99,99 zł"
          price="89"
          description="Deszczownica zestaw natryskowy"
        />
        <Product
          imgUrl="https://slodkiesny.pl/userdata/gfx/7b0a23f45703fdb5de99446faf001524.jpg"
          discount="-40%"
          oldPrice="1499,99 zł"
          price="1099"
          description="Pościel na zimne jesienne wieczory"
        />
      </div>
      <div className="ocassions__more">Przejdź do strefy okazji</div>
    </div>
  );
}

export default Occassions;
