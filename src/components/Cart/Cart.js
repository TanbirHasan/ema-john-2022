import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h4>Order Summry</h4>
            {cart.length}
            
        </div>
    );
};

export default Cart;