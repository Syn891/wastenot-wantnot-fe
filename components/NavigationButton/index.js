import React from 'react';
import css from './NavigationButton.module.css'
import Link from 'next/link'

const NavigationButton = ({Icon, link, color}) => {
    return (
        <Link href={link}>
            <div style={{backgroundColor: color}} className={css.navbutton}>
                <Icon size={'2.5em'}/>   
            </div>
        </Link>
    );
};

export default NavigationButton;