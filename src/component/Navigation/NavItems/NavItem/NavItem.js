import React from "react";
import classes from './NavItem.css'

const navItem = props => (
    <li className={classes.NavigationItem}>
        <a href={props.link}>{props.children}</a>
    </li>
)

export default navItem