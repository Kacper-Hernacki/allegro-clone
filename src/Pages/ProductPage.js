import React from 'react';
import Footer from '../Components/Footer';
import OcassionsForYou from '../Components/OcassionsForYou';
import ProductDescription from '../Components/ProductDescription';
import './ProductPage.css';

function ProductPage() {
  return (
    <div className="productPage">
      <p>Allegro - Inne</p>
      <div className="productPage__container">
        <ProductDescription />
      </div>
      <OcassionsForYou title="Okazje dla Ciebie" />
      <Footer />
    </div>
  );
}

export default ProductPage;
