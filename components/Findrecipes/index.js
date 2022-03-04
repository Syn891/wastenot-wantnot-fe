import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import css from './Findrecipes.module.css'
import Link from 'next/link';

const FindRecipes = ({text}) => {
    return (
      <Link href="/mealPlan">
      <div className={css.heading}>
        <Col className={css.food}><img className={css.image} src="https://i.ibb.co/9gfvTvv/bean-corn-tomato-salad-1056788234-2-7.jpg"></img>
        </Col>
        <Col className={css.header}>{text}</Col>
    </div>
    </Link>
    );
};

export default FindRecipes;