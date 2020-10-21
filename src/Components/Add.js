import React from 'react';
import './Add.css';

function Add({ imgUrl }) {
  return (
    <div className="add">
      <img src={imgUrl} alt="" />
    </div>
  );
}

export default Add;
