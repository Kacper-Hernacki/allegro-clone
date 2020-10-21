import React from 'react';
import './ProductCart.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

function ProductCart({ imgUrl, title }) {
  return (
    <div className="productCart">
      <div className="productCart__container">
        <div className="productCart__product">
          <img src={imgUrl} alt="" />
          <div className="productCart__productDesc">
            <p>raty zero</p>
            <h5>{title}</h5>
          </div>
          <div className="productCart__delete">
            <IconButton>
              <DeleteIcon className="productCart__deleteButton" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
