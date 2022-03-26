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
    setCart([...carts,selectedProduct]);
    // if(selectedProduct ){
    //   console.log('alrady exists')
    // }
    // setCart(newcart)
    // console.log(selectedProduct);
  };

  const removeHnadler=()=>{
    setCart([]);
    
     
  }

  const ChoseForOne=(carts)=>{
   
    const filtered = [carts[Math.floor(Math.random() * carts.length)]]
    // console.log(filtered)

    // filtered.filter(item => (
    //   console.log("random",item[0] )
    // )
  //  if(!carts){

  //   console.log("kakaka")
  //  }
    // )
    setCart(filtered);



   
  // carts.map((item)=>(
  //   console.log(item)
  //    [Math.floor(Math.random() * carts.length)]

    // carts[Math.floor(Math.random() * carts.length)]
  






  }
  return (
    <div className="">
      <h1 className="text-one">My Arms House</h1>
      <h1 className="text-two">Total Arms :{products.length}</h1>
      <div className="products-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              product={product}
              key={product._id }
              AddToCart={AddToCart}
               
            ></Product>
          ))}



          
        </div>
        <div className="cart">
       <div className="cart-pass">

       <h1 className=" ">Selected items</h1>
          {carts.map((cart)=>(
            <Cart cart={cart}
                  key={cart._id}
            ></Cart>


            // <li>{cart.name}</li>

          ))}
           
       


           {/* <h1>{carts.length}</h1> */}
           
      <button className="chose" onClick={()=>ChoseForOne(carts)}>Chose one for me</button>
     <button className="remove" onClick={()=>removeHnadler() }>Remove cart</button>
       </div>
       
        </div>
       

      </div>

      <Question></Question>
      
    </div>
  );
};

export default Products;
