import React from 'react';
import './ElectronicsRow.css';
import Product from './Product';

function ElectronicsRow() {
  return (
    <div className="electronicsRow">
      <p>Elektronika</p>
      <div className="electronicsRow__container">
        <Product
          imgUrl="https://www.digitalstorm.com/img/products/lumos/2020-overview-4-a.jpg"
          discount="-12%"
          oldPrice="7999,99 zł"
          price={6999.99}
          description="PC Lumos"
        />
        <Product
          imgUrl="https://a.allegroimg.com/s512/117e35/39637ae248099eb2281ebea41279/Apple-iPhone-11-Pro-Max-64GB-LTE-IP68-Zloty"
          discount="-25%"
          oldPrice="3999,99 zł"
          price={2999.99}
          description="iphone 11 pro / 64GB"
        />
        <Product
          imgUrl="https://f01.esfr.pl/foto/1/37272655841/86d2e481ec1214819b91d47537503cc0/apple-tablet-ipad-pro-11-1tb-wifi-cell-srebrny,37272655841_7.jpg"
          discount="-50%"
          oldPrice="1999,99 zł"
          price={999.99}
          description="iPad Pro 11 Używany"
        />
        <Product
          imgUrl="https://st2.myideasoft.com/shop/ae/82/myassets/products/886/xbox-series-x.png?revision=1579710163"
          discount="-18%"
          oldPrice="1499,99 zł"
          price={1299.99}
          description="Xbox Series X"
        />
        <Product
          imgUrl="https://image.ceneostatic.pl/data/products/83161213/i-wiedzmin-3-dziki-gon-edycja-kompletna-gra-ns.jpg"
          discount="-50%"
          oldPrice="199,99 zł"
          price={99.99}
          description="Wiedźmin III Nintendo Switch"
        />
      </div>
    </div>
  );
}

export default ElectronicsRow;
