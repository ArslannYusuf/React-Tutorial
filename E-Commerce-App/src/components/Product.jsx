import React from "react";
import "../css/Product.css";

const Product = ({ product }) => {
  const { id, price, image, title, description } = product;

  return (
    <div className="card">
      <img src={image} alt="" className="product-image" />
      <div>
        <p className="product-title">{title}</p>
        <h3 className="product-price">{price} ₺ </h3>
      </div>
    </div>
  )
}

export default Product;
