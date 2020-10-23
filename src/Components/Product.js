import React from 'react';
import './Product.css';
import SmartLogo from './SmartLogo.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Product({ id, imgUrl, discount, oldPrice, price, description }) {
  const [{ product }, dispatch] = useStateValue();

  const openProduct = () => {
    dispatch({
      type: 'OPEN_PRODUCT',
      item: {
        id: id,
        description: description,
        imgUrl: imgUrl,
        price: price,
        discount: discount,
        oldPrice: oldPrice,
      },
    });
  };

  return (
    <Link
      to="/product"
      onClick={openProduct}
      style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="product">
        <img src={imgUrl} alt="" />
        <div className="product__description">
          <div className="products__discountContainer">
            <div className="product__discount">{discount}</div>
            <div className="product__oldPrice">{oldPrice}</div>
          </div>
          <p className="product__price">
            {price}
            <span>,00 zł</span>
          </p>
          <div className="product__smartLogo">
            <img src={SmartLogo} alt="" />
            <p>z kurierem</p>
          </div>
          <p className="product__descriptionTitle">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Product;
