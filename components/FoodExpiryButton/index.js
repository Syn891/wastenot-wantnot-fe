import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link';

const FoodExpirtyButton = ({message}) => {

    return (  
    <Link href={"/"}>
    <button>{message}</button>
    </Link>

    );
};

export default FoodExpirtyButton;