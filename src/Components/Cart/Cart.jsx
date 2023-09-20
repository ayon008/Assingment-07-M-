import React from 'react';
import './Cart.css'

const Cart = props => {
    const carts = props.cart;
    let name = '';
    let count = 0;
    let credit = 0;
    let price = 0;
    console.log(carts);
    for (const cart of carts) {
        count++;
        name = <p>{name} {count}. {cart.courseName}</p>;
        credit = credit + parseInt(cart.credit);
        price = price + parseInt(cart.price);
    }




    return (
        <div className='cart'>
            <h3 className='credit-remaining'>Credit Hour Remaining 7 hr</h3>
            <hr />
            <h3>Course Name</h3>
            {name}
            <hr />
            <h4>Total Credit Hour : {credit}</h4>
            <hr />
            <h4>Total Price : {price} USD</h4>
        </div>
    );
};

export default Cart;