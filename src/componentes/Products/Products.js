import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product.js/Product";
import Question from "../Question/Question";
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
    const newCart = [...carts, selectedProduct];

    if (carts.length < 4) {
      // setCart([])
      // setCart([...carts,selectedProduct]);
      setCart(newCart);
    } else {
      alert("You can not add more then four items");
    }
    // if(selectedProduct ){
    //   console.log('alrady exists')
    // }
    // setCart(newcart)
    // console.log(selectedProduct);
  };

  const removeHnadler = () => {
    setCart([]);
  };

  const ChoseForOne = (carts) => {
    // const filtered = [carts[Math.floor(Math.random() * carts.length)]];
     if(carts.length ){
      const filtered = [carts[Math.floor(Math.random() * carts.length)]];

      setCart(filtered);
     }
    

    // carts.map((item)=>(
    //   console.log(item)
    //    [Math.floor(Math.random() * carts.length)]

    // carts[Math.floor(Math.random() * carts.length)]
  };
  return (
    <div  >
      <h1 className="text-one">My Arms House</h1>
      <h1 className="text-two">Total Arms :{products.length}</h1>
      <div className="products-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              AddToCart={AddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart">
          <div className="cart-pass">
            <h1 >Selected items</h1>
            {carts.map((cart) => (
              <Cart cart={cart} key={cart.id}></Cart>

              // <li>{cart.name}</li>
            ))}

            {/* <h1>{carts.length}</h1> */}

           <div className="py-3">
           <button className="chose" onClick={() => ChoseForOne(carts)}>
              Chose one for me
            </button>
            <button className="remove" onClick={() => removeHnadler()}>
              Remove cart
            </button>
           </div>
          </div>
        </div>
      </div>

      <Question></Question>
    </div>
  );
};

export default Products;
