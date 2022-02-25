import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import css from "./swipePantryBar.module.css";
import FoodListItem from "../FoodListItem";

const leadingActions = () => (
  <LeadingActions>
    <SwipeAction
      destructive={true}
      onClick={() => console.info("swipe action triggered")}
    >
      Delete
    </SwipeAction>
  </LeadingActions>
);

const trailingActions = () => (
  <TrailingActions>
    <SwipeAction
      destructive={true}
      onClick={() => console.info("swipe action triggered")}
    >
      Add
    </SwipeAction>
  </TrailingActions>
);

function SwipeBar({ className, children }) {
  let cN = className;
  return (
    <SwipeableList className={css.swipeableList}>
      <SwipeableListItem
        className={css.swipeBarCss}
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
          <FoodListItem name="chicken" quantity="1" measurement="kg" />

      </SwipeableListItem>
    </SwipeableList>
  );
}

export default SwipeBar;
