import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__columnContainer">
          <div className="footer__column">
            <h3>Allegro</h3>
            <p>O nas</p>
            <p>Reklama</p>
            <p>Allegro Ads</p>
            <p>Allegro API</p>
            <p>Praca w Allegro</p>
            <p>Społeczna Odpowiedzialność</p>
            <p>Allegro Polecam</p>
            <p>Mapa strony</p>
          </div>
          <div className="footer__column">
            <h3>Centrum pomocy</h3>
            <p>Pomoc</p>
            <p>Spytaj Społeczność</p>
            <p>Kupuj na Allegro</p>
            <p>Dla sprzedających</p>
            <p>Sprzedawaj na Allegro</p>
            <p>Polityka plików "cookies"</p>
            <p>Regulamin</p>
            <p>Dopasowanie reklam</p>
            <p>Udostępnianie lokalizacji</p>
          </div>
          <div className="footer__column">
            <h3>Serwisy</h3>
            <p>Allegro Smart!</p>
            <p>Strefa marek</p>
            <p>Artykuły</p>
            <p>Archiwum Allegro</p>
            <p>Monety Allegro</p>
            <p>Karty podarunkowe Allegro</p>
            <p>Akademia Allegro</p>
            <p>Allegro lokalnie</p>
            <p>Allegro Charytatywni</p>
          </div>
          <div className="footer__column">
            <h3>Allegro in English</h3>
            <p>Sell on Allegro</p>
            <p>Help Center</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
        <div className="footer__logos">
          <div className="footer__downloads">
            <img
              src="https://assets.allegrostatic.com/metrum/icon/appstore-1bc3bc3c06.svg"
              alt=""
            />
            <img
              src="https://assets.allegrostatic.com/metrum/icon/playstore-d44c743ccc.svg"
              alt=""
            />
            <img
              src="https://assets.allegrostatic.com/metrum/icon/appgallery-e4b87bbf17.svg"
              alt=""
            />
          </div>
          <div className="footer__socialMedia">
            <img
              src="https://assets.allegrostatic.com/metrum/icon/facebook-a2b92f9dcb.svg"
              alt=""
            />
            <img
              src="https://assets.allegrostatic.com/metrum/icon/linkedin-cd6807318a.svg"
              alt=""
            />
            <img
              src="https://assets.allegrostatic.com/metrum/icon/instagram-95464778fb.svg"
              alt=""
            />
            <img
              src="https://assets.allegrostatic.com/metrum/icon/pinterest-d8d9e5a8f6.svg"
              alt=""
            />
            <img
              src="https://assets.allegrostatic.com/metrum/icon/youtube-dca5fff408.svg"
              alt=""
            />
            <img
              src="https://assets.allegrostatic.com/metrum/icon/charity-7610bf9ae4.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="footer__rules">
        <p>
          Korzystanie z serwisu oznacza akcpetację <span>regulaminu</span>
        </p>
        <img
          src="https://a.allegroimg.com/original/126b6e/bf09245243ef947800dfb73121cb"
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer;
