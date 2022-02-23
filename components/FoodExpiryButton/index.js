import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link';
import css from './FoodExpiryButton.module.css'

const FoodExpirtyButton = ({message}) => {

    return (  
    <Link href={"/"}>
    <div >
    <button className={css.button}>{message}</button>
    </div>
    </Link>

    );
};

export default FoodExpirtyButton;