import React from 'react';
import css from './NavigationButton.module.css'
import Link from 'next/link'

const NavigationButton = ({Icon, link, color, title}) => {
    return (
        <>
        <Link href={link}>
            <div style={{backgroundColor: color}} className={css.navbutton}>
                <Icon size={'2.5em'}/>   
            </div>
        </Link>
        <p style={{fontSize: '80%', marginTop: '0.45em', marginBottom: '0'}}>{title}</p>
        </>
    );
};

export default NavigationButton;