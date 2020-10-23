import React from 'react';
import './ProductCart.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import { useStateValue } from '../StateProvider';

function ProductCart({ id, imgUrl, title, items }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <div className="productCart">
      <div className="productCart__container">
        <div className="productCart__product">
          <img src={imgUrl} alt="" />
          <div className="productCart__productDesc">
            <p>raty zero</p>
            <h5>{title}</h5>
            <b>ilość sztuk : {items}</b>
          </div>
          <div className="productCart__delete">
            <IconButton onClick={removeFromBasket}>
              <DeleteIcon className="productCart__deleteButton" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
