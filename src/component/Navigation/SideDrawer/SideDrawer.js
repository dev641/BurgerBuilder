import React from "react";
import classes from './SideDrawer.css'
import NavItems from "../NavItems/NavItems";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";
const sideDrawer = props =>{
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return(
        <Aux>
            <Backdrop show={props.open} close={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer