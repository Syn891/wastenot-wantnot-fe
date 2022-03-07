import React from 'react'
import css from './DonationsLink.module.css';
import { Row, Col } from 'react-bootstrap';
import {GrMapLocation} from 'react-icons/gr'; 
import Link from 'next/link'

const DonationsLink = ({link}) => {
    return (
        <Link href={link}>
        <Row className={css.box}>
        <Col sm={4} className={css.col}>
        <p className={css.p}>What people need near me?
Donations needed in your area: </p>
</Col>
<Col sm={8} className={css.col} >
<GrMapLocation className={css.logo} />

</Col>
            
        </Row>
        </Link>
    )
}

export default DonationsLink