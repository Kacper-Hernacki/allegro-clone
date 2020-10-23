import React, { useEffect } from 'react';
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
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import BoughtPage from './Pages/BoughtPage';
import Demo from './Pages/Demo';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Switch>
          {/* Other Pages */}
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/payment">
            <PaymentPage />
          </Route>
          <Route path="/product">
            <ProductPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/bought">
            <BoughtPage />
          </Route>
          <Route path="/demo">
            <Demo />
          </Route>
          {/* Home */}
          <Route path="/">
            <div className="app__homePage">
              <div className="app__body">
                <Categories />
                <Slider />
                <WorthSeeing />
                <Login />
                <Choosen
                  id="432"
                  imgUrl="https://www.komputronik.pl/informacje/wp-content/uploads/2020/03/ps5_premiera.jpg"
                  discount="-20%"
                  oldPrice="2499,99 zł"
                  price={1999}
                  description="Playstation 5"
                />
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
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
