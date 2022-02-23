import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link';

const NavButton = ({message}) => {
    return (
    <Link href={"/"}>
    <Col><button>{message}</button></Col>
</Link>
    );
};

export default NavButton;