import React, { useEffect, useState } from "react";
import Product from "../Product.js/Product";
import './Products.css'

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (

    <div>

      <h1 className="text-one">My Arms House</h1>
      <h1 className="text-two">Total Arms :{products.length}</h1>
<div className="products-container">
      

     <div className="product-container">
     {products.map((product) => (
        <Product product={product}> </Product>
      ))}
     </div>
     <div>
               <h1>Cart Details</h1>
     </div>
    </div>
    </div>
    
  );
};

export default Products;
