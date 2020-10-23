import React from 'react';
import './ProductRow.css';
import SmartLogo from './SmartLogo.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function ProductRow({ id, imgUrl, price, description, bought }) {
  const [{ product }, dispatch] = useStateValue();

  const openProduct = () => {
    dispatch({
      type: 'OPEN_PRODUCT',
      item: {
        id: id,
        description: description,
        imgUrl: imgUrl,
        price: price,
      },
    });
  };

  return (
    <Link
      onClick={openProduct}
      to="/product"
      style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="productRow">
        <img className="productRow__image" src={imgUrl} alt="" />
        <div className="productRow__description">
          <div className="productRow__price">
            <div className="productRow__offerPrice">
              {price}
              <span> zł</span>
            </div>
            <img
              src={SmartLogo}
              alt=""
              className="productRow__offerPriceImage"
            />
          </div>
          <div className="productRow__offerProduct">{description}</div>
          <div className="productRow__offerBought">{bought} osób kupiło</div>
        </div>
      </div>
    </Link>
  );
}

export default ProductRow;
