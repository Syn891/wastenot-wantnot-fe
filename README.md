
# WasteNot: WantNot

An all encompassing app that allows households to plan their meals, track expiry dates of items in their pantry and find local food donation points to donate surplus items.
Households can also track their progress and earn badges based on how effectively they are managing their food.

*Note:  App currently runs best on screen sizes 428 x 926 (i.e. iPhone 12 Pro Max)*






<img src="https://i.ibb.co/YTPxJWZ/Wn-Wn-Logo-Black.png" alt="logo" width="200" height="200"/>


## Quick Start

Begin with downloading all of the dependencies:

```bash
  npm i
```

In the file /hooks/useFetch/useFetch.js, amend the fetch request url to run on localhost:3001.

![useFetch.js](https://i.ibb.co/PCYCG8Y/fetch.jpg)

To run this project, run the command:

```bash
  npm run dev
```

Click on the login/signup button to create an account and you will be redirected to your homepage.


## Components

- Navbar
  - Navigation Arrow
  - Burger Bar
- Landing 
    - Dashboard
        - Pie Chart
        - Buttons
- Meal Planner 
    - Input 
    - Filter Button
    - Search Button
    - List Display
- My Meals 
    - List Display
        - Delete Button
        - Add To Ingredients Button
- Grocery List, Pantry List, My Donations
    - List Items
        - Swipe Left 
        - Swipe Right
        - Checkbox
    - Donation Prompt
- Donation Banks
    - Map
    - PostCode Search Bar
    - Results List View
- Account 
    - User Info
    - User Statistics

## Pages
  - Landing
  - About Us
    - Home
      - Meal Planner
      - Grocery List
      - My Meals
      - My Donations
      - My Pantry
      - Donation Banks
      - Account


## API Reference

TomTom Maps

#### Get access to TomTom API

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `key`     | `string` | **Required**. Your API key |

#### Get Postcode using Lat and Long

```http
  GET https://api.postcodes.io/postcodes/${query}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query`   | `Array` | **Required**. Latitude and Longitude As Numbers|


#### Get List of Local Foodbanks API

```http
  GET https://www.givefood.org.uk/api/2/foodbanks/search/?lat_lng=${latitude},${longitude}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `latitude`| `Number` | **Required**. Latitude of current location|
| `longitude`| `Number` | **Required**. Longitude of current location|

## Color Scheme

![useFetch.js](https://i.ibb.co/2Wmq81s/colours.jpg)

## Screenshots

<img src="https://i.ibb.co/r7b5ywh/ezgif-com-gif-maker.gif" alt="screenshot" width="250" height="500" /> &nbsp;&nbsp;&nbsp;  <img src="https://i.ibb.co/bXYBFy3/home-screen.jpg" alt="screenshot" width="250" height="500" />

## Authors


[![github](https://img.shields.io/badge/Sareena_Naser-FF6600?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Syn891) &nbsp; [![github](https://img.shields.io/badge/Erdogan_Elma-FDA96F?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Erdogan90) &nbsp; [![github](https://img.shields.io/badge/Adam_Hooper-FFEADB?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ah960) &nbsp; 

[![github](https://img.shields.io/badge/Amanda_Richards-7BE1AE?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AmandaRichards) &nbsp; [![github](https://img.shields.io/badge/Gariel_Sterpone_Magni-00CD66?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gabrielsterponemagni) &nbsp; [![github](https://img.shields.io/badge/Thomas_Dichmont-009100?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tom-dichmont)



## Documentation

[Research and Planning Documentation](https://github.com/Syn891/wnwn-frontend/tree/main)

[Figma Board](https://www.figma.com/file/YUvxAuqMVHYhvpNJqDoCLR/Waste-Not%2C-Want-Not?node-id=0%3A1)

[Backend repository](https://github.com/ah960/WasteNotWantNotBE)
