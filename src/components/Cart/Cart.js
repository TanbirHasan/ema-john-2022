import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {


    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;

    }
    const tax = parseFloat(( total * 0.1).toFixed(2))
    const grandtotal = total + shipping + tax;
    return (
      <div className="cart">
        <h4>Order Summry</h4>
        <h5>Selected Items : {quantity}</h5>
        <p>Total Price : {total}</p>
        <p>Total Shipping : {shipping}</p>
        <p>Tax : {tax}</p>
        <p>Grand Total : {grandtotal}</p>
      </div>
    );
};

export default Cart;