import React from 'react';
import './Product.css';
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faCartPlus } from "@fortawesome/free-solid-svg-icons";


const Product = ({products,handleClick}) => {
    const {id,name,img,price,seller} = products;
    return (
      <div className="product">
        <img src={img} />
        <div className="product-info">
          <p className="product-name">Name : {name}</p>
          <p>
            <small>Price : {price}</small>
          </p>
          <p>
            <small>Seller : {seller}</small>
          </p>
        </div>
        <button className="btn-cart" onClick={() => handleClick(products)}>
          Add to cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
        </button>
      </div>
    );
};

export default Product;