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
    const remove = {pantry_items: {_id:id}}
    const res = useFetch('pantryList', 'DELETE', remove, `/?user_id=${userId}`)
    await Promise.resolve(res)    
    incrementUserStats('wastage')
  }

  async function removeFromdonDb(id){
    const remove = {pantry_items: {_id:id}}
    const res = useFetch('pantryList', 'DELETE', remove, `/?user_id=${userId}`)
    await Promise.resolve(res)    
    
  }

  async function incrementUserStats(key) {
    let userInfo = useFetch('users', 'GET', null, `/${userId}`)
    userInfo = await Promise.resolve(userInfo)
    let data = userInfo.payload[key] + 1

      let query = {[key]: data}
      let res1 = useFetch('users', 'PUT', query,`/${userId}` )
      res1 = await Promise.resolve(res1)
  }
  async function addToDonationsDb(id){

    const donUser = useFetch('donations', 'GET', null, `/?user_id=${userId}`)
    const res = await Promise.resolve(donUser)
    if(res.payload.length < 1){
      const newDonUser = useFetch('donations', 'POST', object, ``)
    }else{
  
      let query = {donated_items: object.donated_items[0]}
      useFetch('donations', 'PUT', query,`/update/?user_id=${userId}` )
    }
    removeFromdonDb(data)
    incrementUserStats('donations')
  }
  const leadingActions = (id) => (
    <LeadingActions>
      <SwipeAction
          className={css.actionDelete}
        destructive={true}
        onClick={() => removeFromDb(id)}
      >
        <div>Waste</div>
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
