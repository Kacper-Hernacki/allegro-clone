import React from 'react';
import Footer from '../Components/Footer';
import './ProfilePage.css';
import Monets from '../Components/Monets.png';
import SmartPurple from '../Components/SmartPurple.png';

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="profilePage__container">
        <div className="profilePage__containerSettings">
          <div className="profilePage__left">
            <div className="profilePage__description">
              <h1>Dzień dobry!</h1>
              <p>example@mail.com</p>
              <img src={Monets} alt="" />
              <img src={SmartPurple} alt="" />
            </div>
            <img
              src="https://a.allegroimg.com/original~ovwcolormcolorgreen300/1d930d/02e3f098419fb04e881a8cda8d76"
              alt=""
            />
          </div>
          <div className="profilePage__right">
            <h1>Wystaw produkt</h1>
          </div>
        </div>
        <div className="profilePage__containerProducts"></div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
