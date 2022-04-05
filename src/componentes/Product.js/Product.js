import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Animated } from "react-animated-css";

const Product = (props) => {
  //   console.log(props.product)
  const { name, price, img } = props.product;
  return (


    <div> 
    
    <div className="product">
    <Animated
            animationIn="lightSpeedIn"
            animationOut="fadeOut"
          // animationInDuration= "22s"
            isVisible={true}
            durationEnter={5000}
            durationLeave={1000}
          >

      <img src={img} alt="" />
      <h5>Name:{name}</h5>

      <p>Price:{price}</p>
      <button
        className="btn-cart"
        onClick={() => props.AddToCart(props.product)}
      >
        Add to cart
        <FontAwesomeIcon
          className="icon"
          icon={faBagShopping}
        ></FontAwesomeIcon>
      </button>
      </Animated>
    </div>
    
    </div>
  );
};

export default Product;
