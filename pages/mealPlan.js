import RecipieInfoDisplay from "../components/RecipieInfoDisplay";
import Navbar from "../components/Navbar";
import SubPageNavBtn from "../components/SubPageNavBtn";
import {Row, Col, InputGroup, FormControl, Button, Container} from 'react-bootstrap'
import css from '../styles/Mealplan.module.css'
import {BsSearch, BsFilterSquare} from 'react-icons/bs'
import {useEffect, useState} from 'react'
import { IoIosArrowBack } from "react-icons/io";
import {GiForkKnifeSpoon} from 'react-icons/gi'
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import {useFetch} from '../hooks/useFetch.js'
import FilterModalBox from "../components/FilterModalBox";
import Link from "next/link";

const MealPlan = ({data}) => {

  const user = useUser()
  const router = useRouter()
  const [searchInput, setSearchInput] = useState("")
  const [dietaryReqs, setDietaryReqs] = useState([""])
  const [mealType, setMealType] = useState("Dinner")
  const [recipes, setRecipes] = useState([])
  const [modalShow, setModalShow] = useState(false)
 
let r = 237
let g = 159
let b = 102

function handleChange(event) {
  setSearchInput(event.target.value)
}

function handleHealthReqs(text) {
  setMealType([...dietaryReqs, text])
}

async function searchRepo(query, health, meal) {

  // const fetchData = useFetch('api/search', 'GET', null, `/?q=${query}&health=${health}&mealType=${meal}`)
    const fetchData = useFetch('api/search', 'GET', null, `/?q=${query}`)
    let res = await Promise.resolve(fetchData)
    setRecipes(res)
 
}

function loadRecipes() {
  if(recipes.length > 0) {
   
   return recipes.map((recipe) => {
    
    const hashCharIndex = recipe.recipe.uri.indexOf('#')
    const uri = recipe.recipe.uri.slice(hashCharIndex+1, recipe.recipe.uri.length)
    
    const mealPlanObject = {
      user_id: user.user.sub,
      meal_plan: [{
        recipe_name: recipe.recipe.label,
        recipe_id: uri,
        calories: Math.round(recipe.recipe.calories)
      }],
    }
    r = r+1
    g =g+8
    b=b+13
      return <RecipieInfoDisplay
            key={recipe.recipe.uri}
            image={recipe.recipe.image}
            title={recipe.recipe.label}
            url={recipe.recipe.url}
            data={mealPlanObject}
            userId={user.user.sub}
            r={r}
            g={g}
            b={b}
          />
    }) 
  }
}
  return (
    <Container className={css.container}>
      <Row>
        <Navbar Icon={GiForkKnifeSpoon} color="#EF8D4B" title={"Meal Planner"}>
          <IoIosArrowBack
          size={'1.5em'}
          style={{marginRight:'0.25em' }} onClick={()=> router.back()}/>
        </Navbar>
      </Row>

      <Row>
      <div className={css.subPageNav}>
        <Button className={css.subBtn}>Recipes</Button>
       <Link href={'/mymeals'}><Button className={css.subBtn}>My Meals</Button></Link>
      </div>
      </Row>

      <Row className={css.searchContainer}>
        <Col  className={css.searchCol}xs={{span: 2}}>
          <BsFilterSquare fill="rgba(63, 142, 39, 1)" size={'2em'} color={'grey'} onClick={() => setModalShow(true)}/>
        <FilterModalBox
          show={modalShow}
          onHide={() => setModalShow(false)}
          onChange={handleHealthReqs}
        />
          
        </Col>
        <Col className={css.searchCol}>
          <InputGroup className="my-2">
            <FormControl
            placeholder="Search"
            aria-label="search recipes"
            aria-describedby="basic-addon2"
            onChange={handleChange}
            value={searchInput}
            className={css.search}
            />
          <InputGroup.Text 
            onClick={()=> {searchRepo(searchInput, undefined, mealType)}} 
            id="basic-addon2"
            className={css.btn}>
              <BsSearch />
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>

         { loadRecipes()}
     
    </Container>
  );
};

export default MealPlan;
