import React from "react";
import CartDeatails from "../CartDeatails/CartDeatails";

const Cart = (props) => {
//   const {carts}= props.carts;
  console.log(props.carts);

  return (
    <div>
      <h1>Selected items</h1>
          {/* {
                    carts.map((cart)=>(
                              <CartDeatails cart={cart}></CartDeatails>

                    ))
          } */}
    </div>
  );
};

export default Cart;
