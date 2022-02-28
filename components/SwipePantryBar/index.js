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
        className={css.actionDelete}
      destructive={true}
      onClick={() => console.info("swipe action triggered")}
    >
      <div>Delete</div>
    </SwipeAction>
  </LeadingActions>
);

const trailingActions = () => (
  <TrailingActions>
    <SwipeAction
    className={css.actionDonate}
      destructive={true}
      onClick={() => console.info("swipe action triggered")}
    >
      <div>Donate</div>
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
         
          {children}

      </SwipeableListItem>
    </SwipeableList>
  );
}

export default SwipeBar;
