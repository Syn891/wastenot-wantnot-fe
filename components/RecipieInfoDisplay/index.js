import React from "react";
import { Row, Col } from "react-bootstrap";

function RecipieInfoDisplay({ image, title, prepTime, cookTime, url }) {
  return (
    <Row>
      <Col style={{border: "2px solid red"}}xs={{span: 6}}>      
        <img src={image} alt="recipe image"></img>
      </Col>
      <Col style={{border: "2px solid green"}}xs={{span: 6}}>
      <h3>Title goes here: {title}</h3>
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

export default RecipieInfoDisplay;
