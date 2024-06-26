import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {

  const { id, name, description, price } = product;

  const navigate = useNavigate();


  return (
    <div style={{marginBottom:"50px", backgroundColor:"lightgray", padding:"10px"}}>
        <div>Ürün Detayı</div> 
        <h3>İsim: {name}</h3>
        <h5>Açıklama: {description}</h5>
        <h3>Fiyatı: {price}</h3>
        <button onClick={() => navigate(`/product-details/${id}`, {replace: true})}>Detaya Git</button>

        {/* {replace: true} properties'inde tarayıcı geçmişinde yeni bir giriş oluşturmak yerine mevcut girişin yerini alır. Bu, kullanıcıların "geri" düğmesini kullanarak önceki sayfaya dönmesini engeller. */}
    </div>

  )
  
  
};

export default Product;
