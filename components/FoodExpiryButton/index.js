import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link';
import css from './FoodExpiryButton.module.css'

const FoodExpiryButton = ({message, color }) => {
    return (  
    <Link href={"/"}>
    <div >
    <button style={{backgroundColor:color}} className={css.button}>{message}</button>
    </div>
    </Link>

    );
};

export default FoodExpiryButton;