import React from "react";
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const Controls = [
    { label: 'Salad', type: 'salad' },
    {label:'Bacon', type:'bacon'},
    {label:'Meat', type:'meat'},
    { label: 'Cheese', type: 'cheese' },
]
const buildControls = props =>( 
    
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {Controls.map(ctrl => 
        <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={()=> props.added(ctrl.type)}
            remove={()=>props.remove(ctrl.type)}
            disabled={props.disabled[ctrl.type]} /> )}

        <button 
        className={classes.OrderButton}
        onClick={props.ordered}
        disabled={!props.purchasable}>ORDER NOW</button>
    </div>
)

export default buildControls