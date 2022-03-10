import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import css from './MyMealsDisplay.module.css'
import {useFetch} from '../../hooks/useFetch.js'
import { useUser } from "@auth0/nextjs-auth0";


function MyMealsDisplay({ image, title, url, r,g,b, id }) {

  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  // async function deleteMeal(event) {
  //   const fetchedData = useFetch('mealPlan', 'GET', null, `/?user_id=${userId}`)
  //   const response = await Promise.resolve(fetchedData)
  //     useFetch('mealPlan', 'DELETE', data, '' )
    

  async function deleteMeal(id){
    const remove = {meal_plan: {_id:id}}
    const res = useFetch('mealPlan', 'DELETE', remove, `/?user_id=${user.user.sub}`)
    await Promise.resolve(res)
  handleToggle()
}    

  const user = useUser()

  async function addIngredients(id) {
    let res = useFetch('api/search', 'GET', null, `/?recipe_id=${id}`)
    res = await Promise.resolve(res)
    
    console.log(res.recipe)
    res.recipe.ingredients.map((ingredient)=> {
      let ing = {
        name: ingredient.food,
        est_exp: new Date(),
        category: ingredient.foodCategory,
        quantity: ingredient.quantity,
        measurement: ingredient.measure
    }
    let query = { shopping_items: ing };
    
    
    useFetch('shoppinglists', 'PUT', query, `/update/?user_id=${user.user.sub}` )

    })
  }
  
  return (
    <Row className={css.row} style={{background: `rgb(${r} , ${g}, ${b} )`}}>
      <Col className={css.col} xs={{span: 6}}>      
        <img className={css.image} src={image} alt="recipe image"></img>
      </Col>

      <Col className={css.col} xs={{span: 6}}>
        <Row>
          <div className={css.title}>{title}</div>
        </Row>
      <Row style={{display: 'flex', flexDirection: 'row'}}>
        <Row>
        <a className={css.explore} href={url} target="_blank">
          Explore Recipe
        </a>
        </Row>
        <Col>
      <button className={`${css.addRecipe} ${isActive ? `${css.selected}`  : ""}`} onClick={deleteMeal}>x</button>
      </Col>
        <Row className={css.ing}>
          <a  onClick={()=> addIngredients(id)}> Add ingredients to shopping list?</a>
        </Row>
      </Row>
      </Col>
    </Row>
  );
}

export default MyMealsDisplay;
