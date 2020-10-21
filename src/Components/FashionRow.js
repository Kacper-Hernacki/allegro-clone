import React from 'react';
import './FashionRow.css';
import Product from './Product';

function FashionRow() {
  return (
    <div className="fashionRow">
      <p>Modowe okazje</p>
      <div className="fashionRow__container">
        <Product
          imgUrl="https://membranarapgra.pl/pol_pl_Kurtka-Pitbull-Spinnaker-czarna-27556_5.jpg"
          discount="-33%"
          oldPrice="99,99 zł"
          price="69"
          description="Kutka PitBull Jesień"
        />
        <Product
          imgUrl="https://img.pakamera.net/i1/7/371/kurtki-12374614_5908084371.jpg"
          discount="-25%"
          oldPrice="199,99 zł"
          price="149"
          description="Kurtka Fio Zielona"
        />
        <Product
          imgUrl="https://www.uniformshop.pl/!uploads/products/b_851-spodnie-medyczne-damskie-vena-cygaretki-biale-1.jpg"
          discount="-50%"
          oldPrice="299,99 zł"
          price="149"
          description="Spodnie medyczne damskie"
        />
        <Product
          imgUrl="https://www.symbiosis.com.pl/media/cache/gallery/rc/hlqajeoi/tommy-hilfiger-czapka-zimowa-tommy-chevr-damskie-czapki-multicolor-aw0aw04275413.jpg"
          discount="-25%"
          oldPrice="99,99 zł"
          price="75"
          description="Czapka Tommy Hilfiger"
        />
        <Product
          imgUrl="https://moodo.pl/pol_pl_Kurtka-jeansowa-10189_1.jpg"
          discount="-40%"
          oldPrice="199,99 zł"
          price="119"
          description="Kurtka jeansowa"
        />
      </div>
    </div>
  );
}

export default FashionRow;
