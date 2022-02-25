import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import css from "./shoppingList.module.css";

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
    <SwipeableList>
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
