import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const Card = props => {

    const { image, courseName, details, credit, price } = props.product;
    const buttonFunction = props.eventHandler;
    return (
        <div className='card'>
            <div>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='card-body'>
                    <h3>{courseName}</h3>
                    <p>{details}</p>
                    <div className='footer'>
                        <span><FontAwesomeIcon icon={faDollarSign} /></span>
                        <p>Price : {price}</p>
                        <p>Credit : {credit}hr</p>
                    </div>
                </div>
            </div>
            <div className="btn">
                <button onClick={() => buttonFunction(props.product)}>Select</button>
            </div>
        </div>
    );
};

export default Card;