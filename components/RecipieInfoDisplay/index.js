import React from "react";

function RecipieInfoDisplay({ image, title, prepTime, cookTime, url }) {
  return (
    <div>
      <img src={image} alt="recipe image"></img>
      <h3>Title goes here: {title}</h3>
      <p>Prep: {prepTime} mins</p>
      <p>Cook: {cookTime} mins</p>
      <a href={url} target="_blank">
        Explore recipe
      </a>
      <button>+</button>
    </div>
  );
}

export default RecipieInfoDisplay;
