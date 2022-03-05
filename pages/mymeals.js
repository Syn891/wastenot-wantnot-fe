import React, {useState, useEffect, useRef} from 'react';
import { Container,Row } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import { IoIosArrowBack } from "react-icons/io";
import {GiForkKnifeSpoon} from 'react-icons/gi'
import css from '../styles/Mealplan.module.css'
import {useFetch} from '../hooks/useFetch'
import RecipeInfoDisplay from '../components/RecipieInfoDisplay';
import { useUser, getSession } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';

const MyMeals = () => {

    const [mealPlans, setMealPlans] = useState([])
    const [recipes, setRecipes] = useState([])
    const latest = useRef(recipes)
    const {user, isLoading} = useUser()
    const router = useRouter()


    async function getMealPlan() {
        if(isLoading !== true) {
            const fetchData = useFetch('mealPlan', 'GET', null, `/?user_id=${user.sub}`)
            let res = await Promise.resolve(fetchData)
            setMealPlans(res.payload[0].meal_plan)
            return res.payload[0].meal_plan

        }
    }

    useEffect(async ()=> {
       const res = await getMealPlan() 
    //    setMealPlans(res)
      
    }, [isLoading])

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
        // console.log(latest.current)
        // return recipes.map((recipe)=> {
            return <RecipeInfoDisplay 
                    key={latest.current.recipe_id}
                    image={latest.current.image} 
                    title={latest.current.label} 
                    prepTime={latest.current.totalTime} 
                    cookTime={latest.current.totalTime} 
                    url={latest.current.url} 
                    r={241}
                    g={172}
                    b={121} />
        // })
    }

    return (
        <Container className={css.container}>
        <Navbar Icon={GiForkKnifeSpoon} color="#EF8D4B" title={"My Meals"}>
          <IoIosArrowBack
          size={'1.5em'}
          style={{marginRight:'0.25em' }} onClick={()=> router.back()}/>
        </Navbar> 
            <Container>
                {useEffect(()=>{
                    loadRecipes()
                }, [latest.current])}
            </Container>
        </Container>
    );
};

export default MyMeals;