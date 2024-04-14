import { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Summary from "../../components/Summary/Summary";
import Wrapper from "../../hoc/Wrapper";

class BurgerBuilder extends Component{
    state={
        ingredients:[
            {name:'meat',no:0,price:10},
            {name:'cheese',no:0,price:20},
            {name:'salad',no:0,price:5},
        ],
        totalPrice:0,
        goingToPurchase:false
    }
    addIngredients=(type)=>{
        let obj=this.state.ingredients.find(t=>t.name===type);
        let objIndex=this.state.ingredients.findIndex(t=>t.name===type);
        //console.log(obj);
        let oldCount=obj.no;
        let oldPrice=this.state.totalPrice;
        let newPrice=oldPrice+obj.price;
        let newCount=oldCount+1;
        let updatedArray=[...this.state.ingredients];
        updatedArray[objIndex].no=newCount;
        this.setState({
            ingredients:updatedArray,
            totalPrice:newPrice
        })


    }
    removeIngredients=(type)=>{
        let obj=this.state.ingredients.find(t=>t.name===type);
        let objIndex=this.state.ingredients.findIndex(t=>t.name===type);
        //console.log(obj);
        let oldCount=obj.no;
        if(obj.no<=0)
        {
            return;
        }
        let oldPrice=this.state.totalPrice;
        let newPrice=oldPrice-obj.price;
        let newCount=oldCount-1;
        let updatedArray=[...this.state.ingredients];
        updatedArray[objIndex].no=newCount;
        this.setState({
            ingredients:updatedArray,
            totalPrice:newPrice
        })


    }
    showSummary=()=>{
        this.setState({
            goingToPurchase:true
        })
    }

    hideSummary=()=>{
        this.setState({
            goingToPurchase:false
        })
    }

    render(){
        let flag={};
        for(let obj of this.state.ingredients)
        {
            if(obj.no!==0)
            {
                flag[obj.name]=false;
            }
            else{
                flag[obj.name]=true;
            }
        }
    return(
        <Wrapper>
            {this.state.goingToPurchase && <Summary ing={this.state.ingredients} hideSummary={this.hideSummary}/>}
           <Burger ingredients={this.state.ingredients}/>
            <BuildControls showSummary={this.showSummary} disable={flag} price={this.state.totalPrice} add={this.addIngredients} remove={this.removeIngredients}/>
        </Wrapper>
    )
    }
}
export default BurgerBuilder;