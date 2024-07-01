import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/productSlice";
import "../css/ProductDetails.css";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { addToBasket } from "../redux/slices/basketSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const { price, image, title, description } = selectedProduct;
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const addBasket = () => {
    const payload ={
      id,
      price,
      image,
      title,
      description,
      count
    }

    dispatch(addToBasket(payload));
  };

  useEffect(() => {
    getProductbyId();
  }, []);

  const getProductbyId = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };

  return (
    <div className="product-details">
      <div>
        <img src={image} alt="" className="details-img" />
      </div>
      <div>
        <h2 className="details-title">{title}</h2>
        <p className="details-description">{description}</p>
        <h1 className="details-price">{price} ₺</h1>
        <div className="details-icons">
          <FaPlusCircle onClick={increment}/>
          {count}
          <FaMinusCircle onClick={decrement}/>
        </div>

        <div>
          <button className="detail-page-btn" onClick={addBasket}>Sepete Ekle</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
