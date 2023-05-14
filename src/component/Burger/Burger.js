import React from 'react'
import classes from './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
const burger = (props)=>{
    let transformedIngredients = Object.keys(props.ingredients)
                                .map(igKey => [...Array(props.ingredients[igKey])]
                                .map((_,i)=> <BurgerIngredients key={igKey + i} type={igKey} />))
                                .reduce((arr,el)=>arr.concat(el),[])
    transformedIngredients = transformedIngredients.length === 0 ? <p>Please start Adding Ingredients!!!</p> : transformedIngredients                           
    return(
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    )
}

export default burger