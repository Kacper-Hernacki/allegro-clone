import React from 'react';
import Footer from '../Components/Footer';
import ProductCart from '../Components/ProductCart';
import './CartPage.css';

function CartPage() {
  return (
    <div className="cartPage">
      <p className="cartPage__title">Twój koszyk</p>
      <div className="cartPage__container">
        <div className="cartPage__containerLeft">
          <ProductCart
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJNaP1iq1Es7jz4nR-PF-CVD4niIVMj6HV3g&usqp=CAU"
            title="Jersey Kobe Bryant 24"
          />
          <ProductCart
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJNaP1iq1Es7jz4nR-PF-CVD4niIVMj6HV3g&usqp=CAU"
            title="Jersey Kobe Bryant 24"
          />
          <ProductCart
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJNaP1iq1Es7jz4nR-PF-CVD4niIVMj6HV3g&usqp=CAU"
            title="Jersey Kobe Bryant 24"
          />
        </div>
        <div className="cartPage__containerRight">
          <div className="cartPage__amount">
            <p>Do zapłaty</p>
            <div className="cartPage__amountPrice">
              <p>
                179<span>,00 zł</span>
              </p>
              <b>+ dostawa</b>
            </div>
          </div>
          <div className="cartPage__buttons">
            <button className="cartPage__buttonZero">Kup na raty zero</button>
            <button className="cartPage__buttonBuy">Dostawa i płatność</button>
            <button className="cartPage__buttonContinue">
              Kontynuuj zakupy
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
