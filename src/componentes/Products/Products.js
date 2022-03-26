import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product.js/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCart] = useState([]);

  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  const AddToCart = (selectedProduct) => {
    // let newcart =[];
    setCart([...carts,selectedProduct]);
    // if(selectedProduct ){
    //   console.log('alrady exists')
    // }
    // setCart(newcart)
    // console.log(selectedProduct);
  };

  const removeHnadler=()=>{
    setCart([""]);
    
     
  }
  return (
    <div>
      <h1 className="text-one">My Arms House</h1>
      <h1 className="text-two">Total Arms :{products.length}</h1>
      <div className="products-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              product={product}
              key={product._id}
              AddToCart={AddToCart}
               
            ></Product>
          ))}
        </div>
        <div className="">
       <div className="cart-pass">

       <h1 className="cart-pass">Selected items</h1>
          {carts.map((cart)=>(
            <Cart cart={cart}
                  key={cart._id}
            ></Cart>


            // <li>{cart.name}</li>

          ))}
           
       


           {/* <h1>{carts.length}</h1> */}
           
      <button className="chose">Chose one for me</button>
     <button className="remove" onClick={ removeHnadler }>Remove cart</button>
       </div>
       
        </div>
       

      </div>
      
    </div>
  );
};

export default Products;
