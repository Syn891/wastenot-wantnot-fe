import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import css from "./swipeDonationsBar.module.css";
import FoodListItem from "../FoodListItem";
import {useFetch} from "../../hooks/useFetch.js"
import {useUser} from '@auth0/nextjs-auth0'



function SwipeDonationsBar({ className, children, data, object_id, object }) {
  let cN = className;
  let user = useUser()

  async function removeFromDbAndEffectUserValues(id){
    const remove = {donated_items: {_id:id}}
    const res = useFetch('donations', 'DELETE', remove, `/?user_id=${user.user.sub}`)
    await Promise.resolve(res)    
    incrementUserStats('wastage')
    decrementUserStats('donations')
  }

  async function incrementUserStats(key) {
    let userInfo = useFetch('users', 'GET', null, `/${user.user.sub}`)
    userInfo = await Promise.resolve(userInfo)
    let data = userInfo.payload
    
    let query = {[key]: data[key] +1}
    let res1 = useFetch('users', 'PUT', query,`/${user.user.sub}` )
    res1 = await Promise.resolve(res1)
  }


  async function decrementUserStats(key) {
    let userInfo = useFetch('users', 'GET', null, `/${user.user.sub}`)
    userInfo = await Promise.resolve(userInfo)
    let data = userInfo.payload
    
    let query = {[key]: data[key] -1}
    let res1 = useFetch('users', 'PUT', query,`/${user.user.sub}` )
    res1 = await Promise.resolve(res1)
  }


  async function removeFromDonations(id){
    const remove = {donated_items: {_id:id}}
    const res = useFetch('donations', 'DELETE', remove, `/?user_id=${user.user.sub}`)
    await Promise.resolve(res)    
  
  }

  const leadingActions = (id) => (
    <LeadingActions>
      <SwipeAction
          className={css.actionDelete}
        destructive={true}
        onClick={() => removeFromDbAndEffectUserValues(id)}
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
        onClick={() => removeFromDonations(id)}
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
        trailingActions={trailingActions(data)}
      >
         
          {children}

      </SwipeableListItem>
    </SwipeableList>
  );
}

export default SwipeDonationsBar;
