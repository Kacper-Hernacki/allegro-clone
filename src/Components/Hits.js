import React from 'react';
import './Hits.css';
import ProductRow from './ProductRow';

function Hits() {
  return (
    <div className="hits">
      <h2>Hity cenowe</h2>
      <div className="hits__container">
        <ProductRow
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRb5ingvbb4psEPa9CXbMs_7TxttYW7Aj2_NA&usqp=CAU"
          price={59.99}
          description="Adidas piłka nożna World Cup Telstar"
          bought="135"
        />
        <ProductRow
          imgUrl="https://www.mediaexpert.pl/media/cache/gallery/product/1/810/215/579/pncunsbd/images/20/2007893/Smartfon-APPLE-iPhone-11--Purple-Front-Tyl.jpg"
          price={2859.99}
          description="Iphone 11 128 GB"
          bought="109"
        />
        <ProductRow
          imgUrl="https://allegro.stati.pl/AllegroIMG/PRODUCENCI/DELL/Latitude-5401/Dell-Latitude-5401_4.jpg"
          price={3089.99}
          description="Dell latitude 5401 i7-9850H"
          bought={5291}
        />
      </div>
      <div className="hits__footer">Zobacz więcej</div>
    </div>
  );
}

export default Hits;
