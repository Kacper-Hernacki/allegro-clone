import React from 'react';
import './ButtonBuy.css';
import { useStateValue } from '../StateProvider';

function ButtonBuy({ amount }) {
  const [{}, dispatch] = useStateValue();

  const buyProduct = () => {
    dispatch({
      type: 'BUY_PRODUCT',
      item: {
        price: amount,
      },
    });
    console.log(amount);
  };

  return (
    <div className="buttonBuy">
      <button onClick={buyProduct} className="cartPage__buttonBuy">
        Dostawa i płatność
      </button>
    </div>
  );
}

export default ButtonBuy;
