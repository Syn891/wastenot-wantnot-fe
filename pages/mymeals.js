import React, {useState, useEffect, useRef} from 'react';
import { Container,Row } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import { IoIosArrowBack } from "react-icons/io";
import {GiForkKnifeSpoon} from 'react-icons/gi'
import css from '../styles/Mealplan.module.css'
import {useFetch} from '../hooks/useFetch'
import RecipeInfoDisplay from '../components/RecipieInfoDisplay';

const MyMeals = () => {

    const [mealPlans, setMealPlans] = useState([])
    const [recipes, setRecipes] = useState([])
    const latest = useRef(recipes)

    async function getMealPlan() {
        const fetchData = useFetch('mealPlan', 'GET', null, '/?user_id=auth0|6217832025ea850070393ba0')
        let res = await Promise.resolve(fetchData)
        setMealPlans(res.payload[0].meal_plan)
       
    }


    useEffect(()=> {
        getMealPlan() 
      
    }, [])

    useEffect(()=> {
        mealPlans.map(async (meal)=> {
            try {
                const rec = useFetch('api/search', 'GET', null, `/?recipe_id=${meal.recipe_id}`)
                let response = await Promise.resolve(rec)
                setRecipes([...recipes, latest.current = response.recipe])
                
            } catch (err) {
                console.log(err) 
            }
        })
    }, [mealPlans])


    function loadRecipes() {
        return recipes.map((recipe)=> {
            return <RecipeInfoDisplay 
                    image={recipe.image} 
                    title={recipe.label} 
                    prepTime={recipe.totalTime} 
                    cookTime={recipe.totalTime} 
                    url={recipe.url} 
                    r={241}
                    g={172}
                    b={121} />
        })
    }

    return (
        <Container className={css.container}>
        <Navbar Icon={GiForkKnifeSpoon} color="#EF8D4B" title={"My Meals"}>
          <IoIosArrowBack
          size={'1.5em'}
          style={{marginRight:'0.25em' }} onClick={()=> router.back()}/>
        </Navbar> 
            <Container>
                {loadRecipes()}
            </Container>
        </Container>
    );
};

export default MyMeals;