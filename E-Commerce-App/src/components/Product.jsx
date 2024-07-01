import React from "react";
import "../css/Product.css";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { id, price, image, title, description } = product;

  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={image} alt="" className="product-image" />
      <div>
        <p className="product-title">{title}</p>
        <h3 className="product-price">{price} ₺ </h3>
      </div>

      <div className="flex-row">
        <button className="detail-btn" onClick={()=>navigate(`/product-details/${id}`)}>Detayı Gör</button>
      </div>
    </div>
  )
}

export default Product;
