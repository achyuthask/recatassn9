import React from "react";
import style from './recipe.css';
import Stack from 'react-bootstrap/Stack';
  
const Recipe = ({title,calories,image,ingredients}) =>{
    return(
        <Stack gap={3}>
        <div className="card">
        <div className={style.recipe}>
            <img className={style.image} src={image} alt=""/>
            <div className="container">
            <h2>{title}</h2>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
              
           <p>Calories : {calories}</p>
  
            </div>
  
        </div>
        </div>
        </Stack>
    );
  
}
export default Recipe;