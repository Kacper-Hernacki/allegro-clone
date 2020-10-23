import React from 'react';
import Product from './Product';
import './RowOfProducts.css';

function RowOfProducts() {
  return (
    <div className="rowOfProducts">
      <Product
        imgUrl="https://sklepkoszykarski.pl/environment/cache/images/500_500_productGfx_209b59710065b1d591d7fcccde6ce9d4.jpg"
        discount="-33%"
        oldPrice="299,99 zł"
        price={199.99}
        description="Piłka do koszykówki Spalding NBA"
      />
      <Product
        imgUrl="https://matrixnarzedzia.pl/data/gfx/pictures/medium/7/7/5377_12.jpg"
        discount="-25%"
        oldPrice="1999,99 zł"
        price={1499.99}
        description="Kosiarka UR-LS48 Spalinowa"
      />
      <Product
        imgUrl="https://ecsmedia.pl/c/macbeth-b-iext52538660.jpg"
        discount="-50%"
        oldPrice="39,99 zł"
        price={19.99}
        description="Jo Nesbo Macbeth"
      />
      <Product
        imgUrl="https://ansel.frgimages.com/chicago-bulls/michael-jordan-signed-jersey-1984-85-red-rookie-mitchell-and-ness-framed-upper-deck_ss2_p-11048448+u-xc8rn5x72btuhoyld4wp+v-086c36c40af240d5ae4220323eb9cd68.jpg?_hv=1&w=900"
        discount="-20%"
        oldPrice="1999,99 zł"
        price={1599.99}
        description="Jersey Michael Jordan Autograf"
      />
      <Product
        imgUrl="https://3.allegroimg.com/s512/03acbf/83a0f87748e9aeedd4d8981aa653/KOSZ-NA-SMIECI-biurowy-z-siatki-SIATKA-metalowa19L"
        discount="-40%"
        oldPrice="49.99 zł"
        price={29.99}
        description="Kosz na śmieci"
      />
    </div>
  );
}

export default RowOfProducts;
