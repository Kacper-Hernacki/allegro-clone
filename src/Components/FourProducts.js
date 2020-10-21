import React from 'react';
import './FourProducts.css';

function FourProducts() {
  return (
    <div className="fourProducts">
      <div className="fourProducts__product1">
        <h2 className="fourProducts__title">Smartfony</h2>
        <img
          className="fourProducts__image"
          src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className="fourProducts__product2">
        <h2 className="fourProducts__title">Laptopy</h2>
        <img
          className="fourProducts__image"
          src="https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className="fourProducts__product3">
        <h2 className="fourProducts__title">Tablety</h2>
        <img
          className="fourProducts__image"
          src="https://images.unsplash.com/photo-1589739900593-8b1b925ee197?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt=""
        />
      </div>
      <div className="fourProducts__product4">
        <h2 className="fourProducts__title">Gaming</h2>
        <img
          className="fourProducts__image"
          src="https://images.unsplash.com/photo-1602027396593-42505086fe80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </div>
  );
}

export default FourProducts;
