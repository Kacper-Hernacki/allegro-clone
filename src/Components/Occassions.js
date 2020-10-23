import React from 'react';
import './Occassions.css';
import Product from './Product';

function Occassions() {
  return (
    <div className="ocassions">
      <h2>Okazja dnia</h2>
      <div className="ocassions__container">
        <Product
          imgUrl="https://przemax.pl/10575-home_default/rea-milan-zestaw-natryskowy-z-deszczownica-i-bateria-termostatyczna-chrom.jpg"
          discount="-10%"
          oldPrice="99,99 zł"
          price={89}
          description="Deszczownica zestaw natryskowy"
        />
      </div>
      <div className="ocassions__more">Przejdź do strefy okazji</div>
    </div>
  );
}

export default Occassions;
