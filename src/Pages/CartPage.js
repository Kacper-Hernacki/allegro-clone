import React, { useState } from 'react';
import Footer from '../Components/Footer';
import ProductCart from '../Components/ProductCart';
import './CartPage.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import CurrencyFormat from 'react-currency-format';
import ButtonBuy from '../Components/ButtonBuy';

function CartPage() {
  const [{ basket }, dispatch] = useStateValue();

  console.log({ basket });

  return (
    <div className="cartPage">
      <p className="cartPage__title">Twój koszyk</p>
      <div className="cartPage__container">
        <div className="cartPage__containerLeft">
          {basket?.length === 0 ? (
            <div>
              <h2>Twój kosz jest pusty</h2>
              <p>
                Nie masz żadnych przedmiotów w koszu, jeśli chcesz kupić dany
                przedmiot, to kliknij "dodaj do koszyka", lub "Kup teraz"
              </p>
            </div>
          ) : (
            basket?.map((item) => (
              <ProductCart
                id={item.id}
                imgUrl={item.image}
                title={item.title}
                price={item.price}
                items={item.items}
              />
            ))
          )}
        </div>

        {basket.length > 0 && (
          <div className="cartPage__containerRight">
            <div className="cartPage__amount">
              <p>Do zapłaty</p>
              <div className="cartPage__amountPrice">
                <p>
                  <CurrencyFormat
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'zł '}
                  />
                </p>

                <b>+ dostawa</b>
              </div>
            </div>
            <div className="cartPage__buttons">
              <button className="cartPage__buttonZero">Kup na raty zero</button>
              <Link to="/payment">
                {/* <button className="cartPage__buttonBuy">
                  Dostawa i płatność
                </button> */}
                <ButtonBuy amount={getBasketTotal(basket)} />
              </Link>
              <Link to="/">
                <button className="cartPage__buttonContinue">
                  Kontynuuj zakupy
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
