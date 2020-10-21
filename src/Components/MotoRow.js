import React from 'react';
import './MotoRow.css';
import Product from './Product';

function MotoRow() {
  return (
    <div className="motoRow">
      <p>Motoryzacja</p>
      <div className="motoRow__container">
        <Product
          imgUrl="https://autofakty.pl/wp-content/uploads/2018/02/Bugatti-Veyron-0.jpg"
          discount="-5%"
          oldPrice="2 999 999,99 zł"
          price="2 849 999"
          description="Bugatti Veyron"
        />
        <Product
          imgUrl="https://static4.autochemia.pl/pol_pl_Olej-silnikowy-Castrol-Magnatec-5W-40-4L-443_1.jpg"
          discount="-26%"
          oldPrice="99,99 zł"
          price="74"
          description="Olej Silnikowy Castrol Magnetic 5W-40"
        />
        <Product
          imgUrl="https://jadar-auto.pl/Image.ashx?type=4&id=53573"
          discount="-60%"
          oldPrice="999,99 zł"
          price="399"
          description="Opona Triangle"
        />
        <Product
          imgUrl="https://tvprodukt.pl/img/2334/.jpg"
          discount="-15%"
          oldPrice="199,99 zł"
          price="169"
          description="Odkurzacz samochodowy Tanio"
        />
        <Product
          imgUrl="https://www.narzedzia.pl/photo/product/f470x470/sprezarka-samochodowa-airpress-36950-78762.jpg"
          discount="-40%"
          oldPrice="199,99 zł"
          price="119"
          description="Sprężarka samochodowa airpress"
        />
      </div>
    </div>
  );
}

export default MotoRow;
