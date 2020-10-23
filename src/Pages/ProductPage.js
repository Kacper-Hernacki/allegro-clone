import React from 'react';
import Footer from '../Components/Footer';
import OcassionsForYou from '../Components/OcassionsForYou';
import ProductDescription from '../Components/ProductDescription';
import { useStateValue } from '../StateProvider';
import './ProductPage.css';

function ProductPage() {
  const [{ product }, dispatch] = useStateValue();
  console.log({ product });
  return (
    <div className="productPage">
      <p>Allegro - Inne</p>
      <div className="productPage__container">
        {product.map((item) => (
          <ProductDescription
            id={item.id}
            title={item.description}
            image={item.imgUrl}
            price={item.price}
            discount={item.discount}
            oldPrice={item.oldPrice}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default ProductPage;
