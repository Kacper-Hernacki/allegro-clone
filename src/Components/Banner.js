import React from 'react';
import './Banner.css';
import Product from './Product';

function Banner() {
  return (
    <div className="banner">
      <p>Fotowoltaika</p>
      <div className="banner__container">
        <img
          src="https://ozeprojekt.pl/wp-content/uploads/2019/10/fotowoltaika-stock2.png"
          alt=""
        />
        <div className="banner__products">
          <div className="bannerProducts__container">
            <Product
              imgUrl="https://botland.com.pl/blog/wp-content/uploads/2020/06/paneleslonecznemaly-300x229.png"
              discount="-10%"
              oldPrice="199,99 zł"
              price={179.99}
              description="ogniwo fotowoltaiczne"
            />
            <Product
              imgUrl="https://www.multiproject.com.pl/images/Foto/Fotowoltaika/03395.jpg"
              discount="-40%"
              oldPrice="1999,99 zł"
              price={1099.99}
              description="Panel Fotowoltaiczny"
            />
            <Product
              imgUrl="https://www.mc-sklep.pl/images/solare/4sun/panel-elastyczny-4sun-flex-etfe-m-150w-24v-prestige.jpg"
              discount="-10%"
              oldPrice="2499,99 zł"
              price={2249.99}
              description="Panel fotowoltaiczny Flex"
            />
          </div>
          <div className="bannerProducts__more">Zobacz więcej</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
