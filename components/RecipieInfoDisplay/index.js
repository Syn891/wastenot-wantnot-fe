import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import css from './RecipeInfoDisplay.module.css'
import {useFetch} from '../../hooks/useFetch.js'


function RecipeInfoDisplay({ image, title, prepTime, cookTime, url, data, userId, r,g,b }) {

  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  async function submitMeal(event) {
    const fetchedData = useFetch('mealPlan', 'GET', null, `/?user_id=${userId}`)
    const response = await Promise.resolve(fetchedData)
    if(response.payload.length < 1) {
      useFetch('mealPlan', 'POST', data, '' )
    }
    else {
      let query = {meal_plan: data.meal_plan[0]}
      useFetch('mealPlan', 'PUT', query,`/update/?user_id=${userId}` )
    }
    handleToggle()
  }
  
  return (
    <Row className={css.row} style={{background: `rgb(${r} , ${g}, ${b} )`}}>
      <Col className={css.col} xs={{span: 6}}>      
        <img className={css.image} src={image} alt="recipe image"></img>
      </Col>
      <Col className={css.col} xs={{span: 6}}>
      <h3>{title}</h3>
      <p>Prep: {prepTime} mins</p>
      <p>Cook: {cookTime} mins</p>
      <Row style={{display: 'flex', flexDirection: 'row'}}>
        <Col xs={{span:8}}>
        <a href={url} target="_blank">
          Explore recipe
        </a>
        </Col>
      <Col>
      <button className={`${css.addRecipe} ${isActive ? `${css.selected}`  : ""}`} onClick={submitMeal}>+</button>
      </Col>
      </Row>
      </Col>
    </Row>
  );
}

export default RecipeInfoDisplay;
