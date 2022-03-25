import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  //   console.log(props.product)
  const { name, price, img } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h3>Name:{name}</h3>

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
    </div>
  );
};

export default Product;
