import React, {Component} from "react";
import Aux from "../../hoc/Aux/Aux";
import classes from './layout.css'
import Toolbar from "../../component/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../component/Navigation/SideDrawer/SideDrawer";
class Layout extends Component{
    state={
        showSideDrawer:false,
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer : false})
    }
    sideDrawerToggleHandler = () => {
        this.setState(prevState =>{
            return { showSideDrawer: !prevState.showSideDrawer}
        })
    }
    render(){
        return (
            <Aux>
                <Toolbar drawerToggler={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
                <main className={classes.content}>{this.props.children}</main>
            </Aux>
        )
    }
} 

export default Layout