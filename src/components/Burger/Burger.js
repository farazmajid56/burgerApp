import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import './Burger.css';


const Burger=(props)=>{
 
    let dynamic=props.ingredients.map(obj=>{
        let elem=[];
        for(let i=0;i<obj.no;i++)
        {
           elem.push(<BurgerIngredients type={obj.name}/>)
        }
        return elem; 
    })
    let count=0;
    for(let obj of props.ingredients)
    {
        if(obj.no!==0)
        {
            count++;
        }
    }
    if(count===0)
    {
        dynamic=<p>Please start adding ingredients</p>
    }
    return(
        <div className="Burger">
        <BurgerIngredients type='bread-top'/>
        {dynamic}
        <BurgerIngredients type='bread-bottom'/>
        </div>
    );
}
export default Burger;