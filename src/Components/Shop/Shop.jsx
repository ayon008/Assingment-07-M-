import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../Card';
import './Shop.css'
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    let count = 0;
    const buttonClick = product => {
        let newCarts = [...carts, product];
        const remaining = newCarts.filter(cart => cart.id !== product.id);
        const exist = newCarts.find(cart => cart.id === product.id);
        const newMadeCart = [...remaining, exist];
        setCarts(newMadeCart);
        count++;
    }

    return (
        <div>
            <div className="big-container">
                <div className='container'>
                    {
                        products.map(product => <Card eventHandler={buttonClick} key={product.id} product={product}></Card>)
                    }
                </div>
                <div>
                    <Cart cart={carts} count={count}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;