import React from "react";
import { Animated } from "react-animated-css";
// import CartDeatails from "../CartDeatails/CartDeatails";
// import CartDeatails from "../CartDeatails/CartDeatails";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  // const {carts}= props.carts;
  // console.log(props.carts);

  return (
    <div>
<Animated animationIn="flipInX" animationOut="fadeOut"  isVisible={true}>

<div className="d-flex">
      <div className="mt-3 m-auto">
      <p>{cart.name ? "Name:" + cart.name : null}</p>

      </div>
      <div className="cart-img justify-content-cente mt-2">
        <img
          className="img-fluid rounded-circle h-100 ms-5      w-50"
          src={cart.img}
          alt=""
        />
      </div>
    </div>
     </Animated>
    </div>
  );
};

export default Cart;
