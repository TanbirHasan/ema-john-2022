import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])


    


    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])

    const handleClick = (products) => {
       const newcart = [...cart , products];
       setCart(newcart);
        
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(data => <Product key={data.id} products={data} handleClick={handleClick}/>)
                }


            </div>
            <div className='cart-container'>
               <Cart cart={cart}/>

            </div>
            
        </div>
    );
};

export default Home;