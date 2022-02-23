import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link';

const NavButton = ({message}) => {
    return (
    <Link href={"/"}>
    <button>{message}</button>
</Link>
    );
};

export default NavButton;