import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { GiForkKnifeSpoon } from "react-icons/gi";
import css from "../styles/Mealplan.module.css";
import { useFetch } from "../hooks/useFetch";
import MyMealsDisplay from "../components/MyMealsDisplay";
import { useUser, getSession } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

const MyMeals = () => {
  const [mealPlans, setMealPlans] = useState([]);
  const [recipes, setRecipes] = useState([]);
  //     const latest = useRef(recipes)
  const [deleted, setDeleted] = useState(false);
  const { user, isLoading } = useUser();
  const router = useRouter();

  async function getMealPlan() {
    if (isLoading !== true) {
      const fetchData = useFetch(
        "mealPlan",
        "GET",
        null,
        `/?user_id=${user.sub}`
      );
      let res = await Promise.resolve(fetchData);
      // setMealPlans(res.payload[0].meal_plan)
      return res.payload[0].meal_plan;
    }
  }

  useEffect(async () => {
    let res = await getMealPlan();

    async function load() {
      if (res !== undefined) {
        let recipe = res.map(async (response) => {
          let rec = useFetch(
            "api/search",
            "GET",
            null,
            `/?recipe_id=${response.recipe_id}`
          );
          rec = await Promise.resolve(rec);
          return rec;
        });
        let data = await Promise.all(recipe);

        return data;
      }
    }

    let data = await load();
    setRecipes(data);
    setDeleted(false);
  }, [isLoading]);

  function loadRecipes() {
    if (recipes !== undefined) {
      return recipes.map((recipe) => {
        const hashCharIndex = recipe.recipe.uri.indexOf("#");
        const uri = recipe.recipe.uri.slice(
          hashCharIndex + 1,
          recipe.recipe.uri.length
        );
        return (
          <MyMealsDisplay
            image={recipe.recipe.image}
            key={recipe.recipe.uri}
            title={recipe.recipe.label}
            url={recipe.recipe.url}
            r={241}
            g={172}
            b={121}
            id={uri}
            getMealPlan={loadRecipes}
            setDeleted={setDeleted}
          />
        );
      });
    }
  }

  return (
    <Container className={css.container}>
      <Navbar Icon={GiForkKnifeSpoon} color="#EF8D4B" title={"My Meals"}>
        <IoIosArrowBack
          size={"1.5em"}
          style={{ marginRight: "0.25em" }}
          onClick={() => router.back()}
        />
      </Navbar>
      <Container>{loadRecipes()}</Container>
    </Container>
  );
};

export default MyMeals;
