import React from 'react';
import './Product.css'

const Product = (props) => {
          console.log(props.product)
          const {name,price,img} =props.product
          return (
                    <div className='product'>
                        <img src={img} alt=""/> 
                        <h3>Name:{name}</h3>
                         
                        <p>Price:{price}</p> 
                        <button className='btn-cart'>Add to cart</button>
                              
                    </div>
          );
};

export default Product;