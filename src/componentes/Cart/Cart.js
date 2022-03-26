import React from "react";
import CartDeatails from "../CartDeatails/CartDeatails";
// import CartDeatails from "../CartDeatails/CartDeatails";
import './Cart.css'

const Cart = (props) => {
  const {cart}= props;
  // const {carts}= props.carts;
  // console.log(props.carts);

  return (
    <div className="cart">
       {/* <h1>Selected items</h1> */}


      
 
      
     {/* <h5>{`Name:${cart.name}`}</h5> */}
     <h5>{ 
     cart.name?"Name:"+cart.name:null
     
     }</h5>


      
   
    
          
    </div>
    
  );
};

export default Cart;
