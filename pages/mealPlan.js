import RecipieInfoDisplay from "../components/RecipieInfoDisplay";
import Navbar from "../components/Navbar";
import SubPageNavBtn from "../components/SubPageNavBtn";
import {Row, Col, InputGroup, FormControl, Button, Container} from 'react-bootstrap'
import css from '../styles/Mealplan.module.css'
import {BsSearch, BsFilterSquare} from 'react-icons/bs'
import {useState} from 'react'
import { IoIosArrowBack } from "react-icons/io";
import {GiForkKnifeSpoon} from 'react-icons/gi'
import { useRouter } from "next/router";

const MealPlan = ({recipes}) => {

  const router = useRouter()
  const [searchInput, setSearchInput] = useState("")



  function handleChange(event) {
    setSearchInput(event.target.value)
  }

  function searchRepo(string) {

    console.log(searchInput)
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
        <Button className={css.subBtn}>My Meals</Button>
      </div>
      </Row>

      <Row className={css.searchContainer}>
        <Col  className={css.searchCol}xs={{span: 2}}>
          <BsFilterSquare size={'2em'} color={'grey'}/>
        </Col>
        <Col className={css.searchCol}>
          <InputGroup className="my-2">
            <FormControl
            placeholder="Search"
            aria-label="search recipes"
            aria-describedby="basic-addon2"
            onChange={handleChange}
            value={searchInput}
            />
          <InputGroup.Text onClick={()=> {searchRepo(searchInput)}} id="basic-addon2"><BsSearch /></InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>

      <Row>
      
      {recipes.map((recipe) => {
        return (
          <RecipieInfoDisplay
            key={recipe.recipe.uri}
            image={recipe.recipe.image}
            title={recipe.recipe.label}
            url={recipe.recipe.url}
          />
        )
      })}
      </Row>
    </Container>
  );
};

export async function getServerSideProps(ctx) {
   
   ctx = "chicken"
     let recipes = await fetch(`http://localhost:3001/api/search?q=${ctx}`)
     const data = await recipes.json()
     return { props: { recipes: data } }
}
export default MealPlan;
