import { useFetch } from "../hooks/useFetch"
export async function createUserPantryTable(){
      let dbPantry = useFetch('pantryList', 'GET', null, `/?user_id=${user.sub}`)
      
    dbPantry = await Promise.resolve (dbPantry)
    if(dbPantry.payload.length <1){
      let newPantry = { 
        user_id: user.sub,
        pantry_items: [],
     }
     let newdbPantry = useFetch('pantryList', 'POST', newPantry, `/?user_id=${user.sub}`)
     newdbPantry = await Promise.resolve (newdbPantry)
  }
    
  }

  export async function createUserDonationsTable(){

      let dbDonations = useFetch('donations', 'GET', null, `/?user_id=${user.sub}`)
      
      dbDonations = await Promise.resolve (dbDonations)
    console.log(dbDonations)
    if(dbDonations.payload.length <1){
      console.log(user.sub)
      let newDonation = { 
        user_id: user.sub,
        donated_items: [],
     }
     let newdbDonation = useFetch('donations', 'POST', newDonation, '')
     newdbDonation = await Promise.resolve (newdbDonation)
  }

  }

    export async function createUserDonationBanksTable(){

      let dbBanks = useFetch('donationbank', 'GET', null, `/?user_id=${user.sub}`)
      
    dbBanks = await Promise.resolve (dbBanks)
  
    if(dbBanks.payload.length <1){
      console.log(user.sub)
      let newBank = { 
        user_id: user.sub,
        donation_banks: [],
     }
    console.log(newPantry.user_id)
     let newdbBank = useFetch('donationbank', 'POST', newBank, '')
     newdbBank = await Promise.resolve (newdbBank)
     console.log(newdbBank)
  }
  }

  export async function createUserShoppingListTable(){

      let dbShopping = useFetch('shoppinglist', 'GET', null, `/?user_id=${user.sub}`)
      
      dbShopping = await Promise.resolve (dbShopping)
    if(dbShopping.payload.length <1){
      let newShoppingItem = { 
        user_id: user.sub,
        shopping_items: [],
     }
     let newShopping = useFetch('shoppinglist', 'POST', newShoppingItem, `/?user_id=${user.sub}`)
     newShopping = await Promise.resolve (newShopping)
  }

  }

  export async function createUserMealPlanTable(){

      let dbMealPLan = useFetch('mealplan', 'GET', null, `/?user_id=${user.sub}`)
      
      dbMealPlan = await Promise.resolve (dbMealPLan)
    if(dbMealPLan.payload.length <1){
      let newMealPlanItem = { 
        user_id: user.sub,
        meal_plan: [],
     }
     let newMealPlan = useFetch('mealplan', 'POST', newMealPlanItem, `/?user_id=${user.sub}`)
     newMealPlan = await Promise.resolve (newMealPlan)
  }
    
  }

