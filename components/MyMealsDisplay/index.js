import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import css from './MyMealsDisplay.module.css'
import {useFetch} from '../../hooks/useFetch.js'
import { useUser } from "@auth0/nextjs-auth0";


function MyMealsDisplay({ image, title, url, r,g,b, id }) {

  const user = useUser()

  async function addIngredients(id) {
    let res = useFetch('api/search', 'GET', null, `/?recipe_id=${id}`)
    res = await Promise.resolve(res)
    
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
        <Row className={css.ing}>
          <a  onClick={()=> addIngredients(id)}> Add ingredients to shopping list?</a>
        </Row>
      </Row>
      </Col>
    </Row>
  );
}

export default MyMealsDisplay;
