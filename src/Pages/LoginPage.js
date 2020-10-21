import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="loginPage">
      <div className="loginPage__loginContainer">
        <div className="loginPage__login">
          <h1>Zaloguj się</h1>
          <input placeholder="Login lub e-mail" type="text" />
          <input placeholder="Hasło" type="text" />
          <div className="loginPage__loginButtons">
            <p>Nie pamiętasz hasła?</p>
            <button>Zaloguj się</button>
          </div>
          <div className="loginPage__divider">
            <hr />
            <span>lub</span>
            <hr />
          </div>
          <div className="loginPage__socialButtons">
            <button className="loginPage__facebookButton">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Facebook_Circle.svg/1024px-Facebook_Circle.svg.png"
                alt=""
              />
              Zaloguj się przez Facebook
            </button>
            <button className="loginPage__googleButton">
              <img
                src="http://pngimg.com/uploads/google/google_PNG19635.png"
                alt=""
              />
              Zaloguj się przez Google
            </button>
          </div>
        </div>
        <div className="loginPage__register">
          <h3>Nie masz konta?</h3>
          <p>Zarejestruj się</p>
        </div>
      </div>
      <div className="loginPage__rules">
        <p>
          Logując się do Allegro akceptujesz <span>Regulamin</span> w aktualnym
          brzmieniu obowiązującym od dnia 2020-09-04. Informacje o planowanych
          oraz archiwalnych zmianach Regulaminu są dostępne na
          <span> stronie</span>
        </p>
      </div>
      <div className="loginPage__chooses">
        <div className="loginPage__choose">
          <img
            src="https://assets.allegrostatic.com/metrum/icon/wow-offer-a8cea65e64.svg"
            alt=""
          />
          <div className="loginPage__chooseDescription">
            <h2>Najlepsze ceny</h2>
            <p>100 tysięcy sklepów konkuruje o Twoją uwagę.</p>
          </div>
        </div>
        <div className="loginPage__choose">
          <img
            src="https://assets.allegrostatic.com/metrum/icon/much-offer-e1755ea681.svg"
            alt=""
          />
          <div className="loginPage__chooseDescription">
            <h2>Największy wybór</h2>
            <p>95 milionów produktów w jednym miejscu.</p>
          </div>
        </div>
        <div className="loginPage__choose">
          <img
            src="https://assets.allegrostatic.com/metrum/icon/such-safe-d7c304b8d6.svg"
            alt=""
          />
          <div className="loginPage__chooseDescription">
            <h2>Zawsze bezpiecznie</h2>
            <p>Zwrot zakupów i ochrona Kupującego dla każdego.</p>
          </div>
        </div>
      </div>
      <div className="loginPage__footer">
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

export default LoginPage;
