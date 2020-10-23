import React, { useState } from 'react';
import './ProductDescription.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function ProductDescription({ id, title, image, price, discount, oldPrice }) {
  const [{ basket }, dispatch] = useStateValue();
  const [items, setItems] = useState(1);

  function addItem() {
    setItems((prevItem) => prevItem + 1);
  }

  function minusItem() {
    {
      items > 0 && setItems((prevItem) => prevItem - 1);
    }
  }

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        discount: discount,
        items: items,
      },
    });
    console.log('>>>>>>>', items);
  };

  const buyNow = () => {
    dispatch({
      type: 'BUY_NOW',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        discount: discount,
        items: items,
      },
    });
    console.log('>>>>>>> bought', items);
  };

  return (
    <div className="productDescription">
      <div className="productDescription__main">
        <div className="productDescription__mainTitle">
          <h2>{title}</h2>
          <div className="productDescription__mainTitleRight">
            <p>Inne oferty tego produktu</p>
            <h4>Brak</h4>
          </div>
        </div>
        <div className="productDescription__mainProduct">
          <div className="productDescription__mainLeft">
            <img src={image} alt="" />
          </div>

          <div className="productDescription__mainRight">
            <h2>{title}</h2>
            <p>
              Od <span className="productDescription__dealer"> shoppix</span>
            </p>
            <div className="products__discountContainer">
              {discount && <div className="product__discount">{discount}</div>}

              <div className="product__oldPrice">{oldPrice}</div>
            </div>
            <p className="product__price">{price} zł</p>

            <div className="productDescription__postman">
              <div className="productDescription__postmanRow">
                <div className="productDescription__postmanRowLeft">
                  <p>Dostawa od 24.99 zł</p>
                  <p>Przewidywany czas dostawy 2-3 dni</p>
                </div>
                <p className="productDescription__postmanButton">DOSTAWA</p>
              </div>
              <div className="productDescription__postmanRow">
                <div className="productDescription__postmanRowLeft">
                  <p>14 dni na odstąpienie od umowy</p>
                </div>
                <p className="productDescription__postmanButton">Zwroty</p>
              </div>
              <div className="productDescription__postmanRow">
                <div className="productDescription__postmanRowLeft">
                  <p>Wygodne płatności, raty 0%</p>
                </div>
                <p className="productDescription__postmanButton">Płatności</p>
              </div>
            </div>

            <div className="productDescription__addItem">
              <p>Liczba sztuk</p>
              <div className="productDescription__add">
                <button onClick={minusItem}>-</button>
                <input
                  value={items}
                  onChange={(event) => setItems(event.target.value)}
                  type="numeric"
                />
                <button onClick={addItem}>+</button>
              </div>
            </div>

            <div className="productDescription__buttons">
              <Link to="/cart">
                <button
                  onClick={addToBasket}
                  className="productDescription__button">
                  Dodaj do koszyka
                </button>
              </Link>
              <Link to="/payment">
                <button onClick={buyNow} className="productDescription__button">
                  Kup teraz
                </button>
              </Link>
            </div>

            <div className="productDescription__footer">
              <h4>Allegro gwarantuje bezpieczne zakupy</h4>
              <p>
                Otrzymasz kupiony przedmiot albo zwrócimy Ci pieniądze.
                <span> Sprawdź szczegóły</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}

      <div className="productDescription__parameters">
        <h1>Parametry</h1>
        <p>Faktura: Wystawiam fakturę VAT</p>
        <h2>Dane szczegółowe</h2>
        <p>Napisz do sprzedawcy, by dopytać o szczegóły produktu</p>
      </div>
    </div>
  );
}

export default ProductDescription;
