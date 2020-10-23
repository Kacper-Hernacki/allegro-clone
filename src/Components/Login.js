import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState(false);

  return (
    <div className="login">
      <div className="login__row">
        <img
          src="https://a.allegroimg.com/original/12316d/2268070d49aaab12c8e5983855b0"
          alt=""
        />
        <div className="login__rowTitle">Darmowe dostawy z Allegro Smart!</div>
      </div>
      <div className="login__row">
        <img
          src="https://a.allegroimg.com/original/12092f/c3813a694866ac18da107e5fa5e0"
          alt=""
        />
        <div className="login__rowTitle">Zbieraj Monety</div>
      </div>
      <div className="login__row">
        <img
          src="https://a.allegroimg.com/original/126037/31bef5314fee997dbfbd66142ee7"
          alt=""
        />
        <div className="login__rowTitle">Oceń produkty</div>
      </div>

      {!user ? (
        <Link to="/login">
          <button className="login__button">Zaloguj się</button>
        </Link>
      ) : (
        <button className="login__button">Wyloguj się</button>
      )}
    </div>
  );
}

export default Login;
