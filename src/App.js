import React from 'react';
import './App.css';
import Categories from './Components/Categories';
import Header from './Components/Header';
import Slider from './Components/Slider';
import WorthSeeing from './Components/WorthSeeing';
import Choosen from './Components/Choosen';
import Login from './Components/Login';
import Add from './Components/Add';
import Occassions from './Components/Occassions';
import Hits from './Components/Hits';
import FourProducts from './Components/FourProducts';
import ProductsCategories from './Components/ProductsCategories';
import OcassionsForYou from './Components/OcassionsForYou';
import Promo from './Components/Promo';
import WinterRow from './Components/WinterRow';
import MotoRow from './Components/MotoRow';
import FashionRow from './Components/FashionRow';
import ElectronicsRow from './Components/ElectronicsRow';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import PromoImg from './Components/PromoImg.jpg';
import SolarPower from './Components/SolarPower.jpg';
import LoginPage from './Pages/LoginPage';
import Register from './Pages/Register';
import ProductPage from './Pages/ProductPage';
import SearchPage from './Pages/SearchPage';
import CartPage from './Pages/CartPage';
import PaymentPage from './Pages/PaymentPage';
import ProfilePage from './Pages/ProfilePage';

function App() {
  const user = true;
  const registered = false;

  return (
    <div className="app">
      <Header />
      <ProfilePage />
      {/* <PaymentPage /> */}
      {/* <CartPage /> */}
      {/* <SearchPage /> */}

      {/* <ProductPage /> */}
      {/* {user ? (
        !registered ? (
          <Register />
        ) : (
          <LoginPage />
        )
      ) : (
        <div className="app__homePage">
          <div className="app__body">
            <Categories />
            <Slider />
            <WorthSeeing />
            <Login />
            <Choosen />
          </div>
          <Add imgUrl="https://a.allegroimg.com/original/128847/ac7639004c2ca4c582f001ed20fc" />
          <div className="app__products">
            <Occassions />
            <Hits />
            <FourProducts />
            <ProductsCategories />
          </div>
          <OcassionsForYou title="Okazje dla Ciebie" />
          <Promo imgUrl={PromoImg} />
          <WinterRow />
          <Add imgUrl="https://a.allegroimg.com/original/1203c9/ce3dc4834e7b95ce9b768dd049b1" />
          <FashionRow />
          <MotoRow />
          <ElectronicsRow />
          <Promo imgUrl={SolarPower} />
          <Banner />
          <Footer />
        </div>
      )} */}
    </div>
  );
}

export default App;
