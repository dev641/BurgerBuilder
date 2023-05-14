import React, {Component} from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../component/Burger/Burger";
import BuildControls from "../../component/Burger/BuildControls/BuildControls";
import Modal from "../../component/UI/Modal/Modal";
import OrderSummary from "../../component/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad:0.5,
    bacon:0.7,
    cheese:1,
    meat:1,
}
class BurgerBuilder extends Component{
    state = {
        ingredients:{
            salad:0,
            cheese:0,
            bacon:0,
            meat:0,
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false,
    }
    updatePurchaseState = (ingredients) => {
        const sum = Object.values(ingredients).reduce((sum,el)=>sum+el, 0)
        this.setState({purchasable:sum > 0})
    }

    purchasehandler = () =>{
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing : false})
    }
    purchaseContinueHandler = () =>{
        alert('Please Continue')
    }

    addIngredientHandler = (type) => { 
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] +=1
        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
        this.setState({ingredients:updatedIngredients, totalPrice:updatedPrice})
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler =(type) => { 
        const updatedIngredients = { ...this.state.ingredients}
        if(updatedIngredients[type] <= 0){
            return
        }
        updatedIngredients[type] -= 1
        const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
        this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice })
        this.updatePurchaseState(updatedIngredients)
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        
        return (
        <Aux>
            <Modal show={this.state.purchasing} close={this.purchaseCancelHandler}>
                <OrderSummary 
                price={this.state.totalPrice}
                ingredients={this.state.ingredients}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />
            </Modal>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls 
                price={this.state.totalPrice}
                added={this.addIngredientHandler}
                remove={this.removeIngredientHandler}
                purchasable={this.state.purchasable}
                ordered={this.purchasehandler}
                disabled={disabledInfo} />
        </Aux>)
    }
}
export default BurgerBuilder