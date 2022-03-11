import React from 'react';
import { Col } from 'react-bootstrap';
import css from './DonationPromptInfo.module.css'
import { GrMapLocation } from "react-icons/gr";
import Link from 'next/link'



const DonationPromptInfo = ({text, icon, width}) => {
    return (
        <Link href="/donationPoints">
        <div className={css.dpi} style={{width: width}}>
            <Col xs={{span: 9}}>
            {text}
            </Col>
            <Col xs={{span: 3}} className={css.svg}>
                <GrMapLocation size={'3em'}/>
            </Col>
        </div>
        </Link>
    );
};

export default DonationPromptInfo;