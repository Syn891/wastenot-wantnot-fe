import React from 'react'
import {Row, Col} from 'react-bootstrap'
import css from './donate.module.css'

const DonateGreen = () => {
    return (
        <Row className={css.box}>
            <Col><p className={css.p}>Assign ‘status’ to checked item(s):
Eaten,  Donated, or Wasted!</p></Col>
<Col><img src="../img/Recycle-icon.png" /></Col>
        </Row>
    )
}

export default DonateGreen