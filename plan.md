Make DashBoard component resposive

-Get user information from login (Auth0) When user logs in their user information needs to be stored in a piece of state (useState).
 1 - Code piece of State in landing.js(?) trialed in apiTest.js need to add user state
 2 - In dashboard chart, pass value prop to first "color" of piechart, then set the value of the second color as: 100 minus the value from the first one.

-From the `user` collection in mongo, we need to access the: `wastage`, `consumption` and `donation` information. DONE
 1 - Set the prop value for each chart within the dashboard to user.wastage, user.donations and user.consumption respectively.

-Set the value of the dasboard chart to be those values.

Assign to Wasted/Eaten/Donated 

- User checks items in the list component then clicks on the eat/waste/consume button
- they select a category to assign the itens to. 
- These items are then deleted from the donations collection in the database
- They are added to either eaten, wasted or donated in the user collection (which displays in the dashboard) as a percentage


Maths

- add up all items that have reached their expiry date - as simple number of items 
- if all items are assigned a category then work calculate each as a percentage of the total expired items

- if they haven't all been assigned 

- total all the items which have been assigned a category eaten/wasted/donated - as simple no of items
- calculate percentages

- sort them by date
- store the top 3 in an array as objects
- map over these 3 and pull out the expiry data
- perform the function for the calculation
- render a food expiry button with the information returned from the function 
