import React from 'react'
import Product from '../components/Product'
import  products  from '../data/Products.json'



const Products = () => {
  return (
    <div>
      {
        products && products.map((product)=>(
          <Product key={product.id} product={product}/>
        ))
      }
    </div>
  )
}

export default Products
