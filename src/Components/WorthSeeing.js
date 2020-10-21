import React from 'react';
import './WorthSeeing.css';

function WorthSeeing() {
  return (
    <div className="worthSeeing">
      <h2>Warto zobaczyć</h2>
      <div className="worthSeeing__columnContainer">
        <div className="worthSeeing__column">
          <img
            src="https://a.allegroimg.com/original/12470b/f7bbc645456e87badfddf6660371"
            alt=""
          />
          <div>Kup Allegro Smart!</div>
        </div>
        <div className="worthSeeing__column">
          <img
            src="https://a.allegroimg.com/original/12ba63/48875cee45a0952b305f9819169b"
            alt=""
          />
          <div>Już jesień</div>
        </div>
        <div className="worthSeeing__column">
          <img
            src="https://a.allegroimg.com/original/127397/0d7759234a3b9a786527f4ccbb08"
            alt=""
          />
          <div>Zadbaj o zdrowie</div>
        </div>
        <div className="worthSeeing__column">
          <img
            src="https://a.allegroimg.com/original/12b3b3/ec65ab8545deaf0a472225fd49c3"
            alt=""
          />
          <div>PyrkONline</div>
        </div>
        <div className="worthSeeing__column">
          <img
            src="https://a.allegroimg.com/original/12df88/963aebda493b97d357762937550b"
            alt=""
          />
          <div>Urządź wnętrza</div>
        </div>
      </div>
    </div>
  );
}

export default WorthSeeing;
