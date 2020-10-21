import React from 'react';
import RowOfProducts from './RowOfProducts';
import './OcassionsForYou.css';

function OcassionsForYou({ title }) {
  return (
    <div className="ocassionsForYou">
      <p>{title}</p>
      <RowOfProducts />
    </div>
  );
}

export default OcassionsForYou;
