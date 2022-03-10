import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import css from "./swipeFoodListItem.module.css";
import { useFetch } from "../../hooks/useFetch";

function SwipeFoodListItem({
  _id,
  //className,
  children,
  /*data,
  object_id,
  userId,
  object,*/
  userSub,
  listItem,
  getUserShoppingList,
}) {
  async function removeFromSl(_id) {
    const remove = { shopping_items: { _id: _id } };
    const res = useFetch(
      "shoppinglists",
      "DELETE",
      remove,
      `/?user_id=${userSub}`
    );
    let removePromise = await Promise.resolve(res);
  }

  async function addToPantry(_id) {
    // getUserShoppingList(); //janky
    const donUser = useFetch("pantryList", "GET", null, `/?user_id=${userSub}`);
    const res = await Promise.resolve(donUser);
    let query = { pantry_items: listItem };
    // let query = { pantry_items: listItem, user_id: userSub };
    if (res.payload.length < 1) {
      useFetch("pantryList", "POST", listItem, `/?user_id=${userSub}`);
    } else {
      useFetch("pantryList", "PUT", query, `/update/?user_id=${userSub}`);
    }
    removeFromSl(_id); //why its working
    getUserShoppingList();

    //incrementUserStats('donations')
  }

  // let cN = className;
  // async function removeFromDb(id){
  //   const remove = {id:id}
  //   const res = useFetch('pantryList', 'PUT', remove, `/${object_id}`)
  //   const test = await Promise.resolve(res)
  // }

  // async function addToDonationsDb(id){
  //   // const remove = {id:id}
  //   // const res = useFetch('pantryList', 'PUT', remove, `/${object_id}`)
  //   // const test = await Promise.resolve(res)
  //   const donUser = useFetch('donations', 'GET', null, `/?user_id=${userId}`)
  //   const res = await Promise.resolve(donUser)
  //   if(res.payload.length < 1){
  //     const newDonUser = useFetch('donations', 'POST', object, ``)
  //   }else{

  //     let query = {donated_items: object.donated_items[0]}
  //     useFetch('donations', 'PUT', query,`/update/?user_id=${userId}` )
  //   }
  //   removeFromDb(data)
  // }
  const leadingActions = (_id) => (
    <LeadingActions>
      <SwipeAction
        className={css.actionDelete}
        destructive={true}
        onClick={() => removeFromSl(_id)}
        // onClick={() => removeFromDb(id)}
      >
        <div>Delete</div>
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = (_id) => (
    <TrailingActions>
      <SwipeAction
        className={css.actionDonate}
        destructive={true}
        onClick={() => addToPantry(_id)}
        // onClick={() => addToDonationsDb(id)}
      >
        <div>Add&nbsp;To&nbsp;Pantry</div>
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList className={css.swipeableList}>
      <SwipeableListItem
        className={css.swipeBarCss}
        leadingActions={leadingActions(_id)}
        // leadingActions={leadingActions(data)}
        trailingActions={trailingActions(_id)}
        // trailingActions={trailingActions(object_id)}
      >
        {children}
      </SwipeableListItem>
    </SwipeableList>
  );
}

export default SwipeFoodListItem;
