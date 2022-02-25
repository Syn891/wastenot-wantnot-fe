import React from "react";
import { Row, Col } from "react-bootstrap";
import css from './RecipeInfoDisplay.module.css'


function RecipeInfoDisplay({ image, title, prepTime, cookTime, url }) {
  return (
    <Row className={css.row}>
      <Col style={{border: "2px solid red"}}xs={{span: 6}}>      
        <img className={css.image} src={image} alt="recipe image"></img>
      </Col>
      <Col style={{border: "2px solid green"}}xs={{span: 6}}>
      <h3>{title}</h3>
      <p>Prep: {prepTime} mins</p>
      <p>Cook: {cookTime} mins</p>
      <a href={url} target="_blank">
        Explore recipe
      </a>
      <button>+</button>
      </Col>
    </Row>
  );
}

export default RecipeInfoDisplay;
