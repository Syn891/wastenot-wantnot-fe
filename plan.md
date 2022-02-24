Make DashBoard component resposive

-Get user information from login (Auth0) When user logs in their user information needs to be stored in a piece of state (useState).
 1 - Code piece of State in landing.js(?)
 2 - In dashboard chart, pass value prop to first "color" of piechart, then set the value of the second color as: 100 minus the value from the first one.

-From the `user` collection in mongo, we need to access the: `wastage`, `consumption` and `donation` information.
 1 - Set the prop value for each chart within the dashboard to user.wastage, user.donations and user.consumption respectively.

-Set the value of the dasboard chart to be those values.