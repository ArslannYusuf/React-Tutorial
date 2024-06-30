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

      <div className="flex-row">
        <button className="detail-btn">Detayı Gör</button>
      </div>
    </div>
  )
}

export default Product;
