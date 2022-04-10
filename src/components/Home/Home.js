import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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

    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for(const id in storedCart){
            const addedproduct = products.find(product => product.id === id)
            if(addedproduct){
                const quantity = storedCart[id];
                addedproduct.quantity = quantity;
                saveCart.push(addedproduct);
            }
        }
        setCart(saveCart)
    },[products])

    const handleClick = (products) => {
      

        let newCart = []
       const exists = cart.find(product => product.id === products.id);
       if(!exists){
            products.quantity = 1;
             newCart = [...cart, products];

       }
       else{
           const rest = cart.filter(product => product.id !== products.id);
           exists.quantity = exists.quantity + 1;
           newCart = [...rest,exists];
          

       }
        
       setCart(newCart);
       addToDb(products.id)

        
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