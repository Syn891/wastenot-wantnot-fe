import RecipieInfoDisplay from "../components/RecipieInfoDisplay";
import Navbar from "../components/Navbar";
import SubPageNavBtn from "../components/SubPageNavBtn";
import {Row} from 'react-bootstrap'

const MealPlan = () => {
  return (
    <div>
      <Row>
        <h1>hello im the meal plan</h1>
      </Row>

      <Row>
        <Navbar title={"Meal Planner"} />
      </Row>

      <Row>
      <div>
        <SubPageNavBtn buttonName={"Recipes"} />
        <SubPageNavBtn buttonName={"My Meals"} />
      </div>
      </Row>

      <Row>
        
      <RecipieInfoDisplay
        image={
          "https://ih1.redbubble.net/image.2929924990.5213/raf,128x128,075,f,grey_lightweight_hoodie.jpg"
        }
        title={"Lorem Ipsum"}
        prepTime={999}
        cookTime={1}
        url={
          "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwi0y7ruz5P2AhWXFMAKHZQkBbUQPAgI"
        }
      />
      <RecipieInfoDisplay
        image={
          "https://ih1.redbubble.net/image.2929924990.5213/raf,128x128,075,f,grey_lightweight_hoodie.jpg"
        }
        title={"Lorem Ipsum"}
        prepTime={99}
        cookTime={10}
        url={
          "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwi0y7ruz5P2AhWXFMAKHZQkBbUQPAgI"
        }
      />
      <RecipieInfoDisplay
        image={
          "https://ih1.redbubble.net/image.2929924990.5213/raf,128x128,075,f,grey_lightweight_hoodie.jpg"
        }
        title={"Lorem Ipsum"}
        prepTime={9}
        cookTime={100}
        url={
          "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwi0y7ruz5P2AhWXFMAKHZQkBbUQPAgI"
        }
      />
      </Row>
    </div>
  );
};

export default MealPlan;
