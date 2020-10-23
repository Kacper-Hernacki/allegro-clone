import React from 'react';
import './WinterRow.css';
import Product from './Product';

function WinterRow() {
  return (
    <div className="winterRow">
      <p>Zimowe szaleństwo</p>
      <div className="winterRow__container">
        <Product
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRSlDwgpe6lmxcgNqFkOaU2YoZz39iRfSUWg&usqp=CAU"
          discount="-33%"
          oldPrice="2999,99 zł"
          price={1999.99}
          description="Narty Nowe Fischer"
        />
        <Product
          imgUrl="https://ski4you.pl/wp-content/uploads/2018/10/buty-narciarskie-head-vector-rs-130-s-2019.jpg"
          discount="-25%"
          oldPrice="1999,99 zł"
          price={1499.99}
          description="Buty narciarskie Head"
        />
        <Product
          imgUrl="https://ridestore.imgix.net/catalog/product//d/s/dsc03866-2_3.jpg?fit=max&q=90&dpr=1&usm=15&auto=format&w=589"
          discount="-50%"
          oldPrice="999,99 zł"
          price={499.99}
          description="Bluza snowboardowa Dope"
        />
        <Product
          imgUrl="https://www.zawojski.pl/dane/source/a/api1ac61a366b6b446983ebbbd2b76f1971.jpg"
          discount="-25%"
          oldPrice="999,99 zł"
          price={749.99}
          description="Kask Redbull Małysz Morgenstern "
        />
        <Product
          imgUrl="https://www.sportmoda.pl/45128-large_default/reusch-rekawice-narciarskie-henrik-kristoffersen.jpg"
          discount="-40%"
          oldPrice="199,99 zł"
          price={119.99}
          description="Rękawice narciarskie Reusch"
        />
      </div>
    </div>
  );
}

export default WinterRow;
