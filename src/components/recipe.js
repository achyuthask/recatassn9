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
            <h2 style={{color : " rgb(255, 115, 0) "}}>{title}</h2>
            <ol style={{color : "  rgb(19, 255, 19)"}}>
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