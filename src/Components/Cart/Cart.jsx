import React from 'react';
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    let hour = 20 - credit;
    const notify = () => toast(" ⚠️ You Can't take more than 20 credits");
    if (credit > 20 && hour < 0) {
        name = '';
        count = 0;
        price = 0;
        credit = 0;
        hour = 0;
        notify();
    }

    return (
        <div className='cart'>
            <h3 className='credit-remaining'>Credit Hour Remaining {hour} hr</h3>
            <hr />
            <h3>Course Name</h3>
            {name}
            <hr />
            <h4>Total Credit Hour : {credit}</h4>
            <hr />
            <h4>Total Price : {price} USD</h4>
            <ToastContainer />
        </div>
    );
};

export default Cart;