import React from "react";
import classes from './NavItems.css'
import NavItem from "./NavItem/NavItem";
const navItems = props =>(
    <ul className={classes.NavigationItems}>
        <NavItem link="/">Burger Builder</NavItem>
        <NavItem link="/">CheckOut</NavItem>
    </ul>
)

export default navItems