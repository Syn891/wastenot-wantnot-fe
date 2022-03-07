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
import {useFetch} from "../../hooks/useFetch.js"



function SwipePantryBar({ className, children, data, object_id, userId, object }) {
  let cN = className;

  async function removeFromDb(id){
    console.log(object_id)
    const remove = {pantry_items: {_id:id}}
    console.log("remove from be")
    const res = useFetch('pantryList', 'DELETE', remove, `/?user_id=${userId}`)
    const test = await Promise.resolve(res)
  }
  async function addToDonationsDb(id){
    // const remove = {id:id}
    // const res = useFetch('pantryList', 'PUT', remove, `/${object_id}`)
    // const test = await Promise.resolve(res)
    // console.log(test)
    const donUser = useFetch('donations', 'GET', null, `/?user_id=${userId}`)
    const res = await Promise.resolve(donUser)
    if(res.payload.length < 1){
      const newDonUser = useFetch('donations', 'POST', object, ``)
    }else{
  
      let query = {donated_items: object.donated_items[0]}
      useFetch('donations', 'PUT', query,`/update/?user_id=${userId}` )
    }
    removeFromDb(data)
  }
  const leadingActions = (id) => (
    <LeadingActions>
      <SwipeAction
          className={css.actionDelete}
        destructive={true}
        onClick={() => removeFromDb(id)}
      >
        <div>Delete</div>
      </SwipeAction>
    </LeadingActions>
  );
  
  const trailingActions = (id) => (
    <TrailingActions>
      <SwipeAction
      className={css.actionDonate}
        destructive={true}
        onClick={() => addToDonationsDb(id)}
      >
        <div>Donate</div>
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList className={css.swipeableList}>
      <SwipeableListItem
        className={css.swipeBarCss}
        leadingActions={leadingActions(data)}
        trailingActions={trailingActions(object_id)}
      >
         
          {children}

      </SwipeableListItem>
    </SwipeableList>
  );
}

export default SwipePantryBar;
