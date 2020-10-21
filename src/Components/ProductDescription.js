import React, { useState } from 'react';
import './ProductDescription.css';

function ProductDescription() {
  const [items, setItems] = useState(0);

  function addItem() {
    setItems((prevItem) => prevItem + 1);
  }

  function minusItem() {
    {
      items > 0 && setItems((prevItem) => prevItem - 1);
    }
  }

  return (
    <div className="productDescription">
      <div className="productDescription__main">
        <div className="productDescription__mainTitle">
          <h2>Szuflada narożna</h2>
          <div className="productDescription__mainTitleRight">
            <p>Inne oferty tego produktu</p>
            <h4>Brak</h4>
          </div>
        </div>
        <div className="productDescription__mainProduct">
          <div className="productDescription__mainLeft">
            <img
              src="https://s1.meble.pl/gfx/_zdjecia_wspolne/sklep_oferta/0/38/38779/bszuflada_tandembox_narozna_wys_m83mm_dl_6cm_5kg_b_1794340833.jpg"
              alt=""
            />
          </div>

          <div className="productDescription__mainRight">
            <h2>Szuflada narożna</h2>
            <p>
              Od <span className="productDescription__dealer"> shoppix</span>
            </p>
            <div className="products__discountContainer">
              <div className="product__discount">-10 %</div>
              <div className="product__oldPrice">999,99 zł</div>
            </div>
            <p className="product__price">
              899
              <span>,00 zł</span>
            </p>

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
                <input value={items} type="numeric" />
                <button onClick={addItem}>+</button>
              </div>
            </div>

            <div className="productDescription__buttons">
              <button>Dodaj do koszyka</button>
              <button>Kup teraz</button>
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
