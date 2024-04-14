
import BuildControl from "./BuildControl/BuildControl";
import './BuilldControls.css';

const controls=[
    {label:"Meat" , type:"meat"},
    {label:"Cheese" , type:"cheese"},
    {label:"Salad" , type:"salad"},

]

const BuildControls=(props)=>{
    return (
        <div className="BuildControls">
            <div>Current Price: <strong>{props.price}</strong></div>
           
            {
                controls.map(ctrl=>{
                    return <BuildControl label={ctrl.label} disable={props.disable[ctrl.type]} add={()=>props.add(ctrl.type)} remove={()=>props.remove(ctrl.type)}/>
                })
            }
            <button className="OrderButton" onClick={props.showSummary} disabled={props.price <= 0}>ORDER NOW</button>
            {/* <BuildControl label="Meat"/>
            <BuildControl label="Meat"/>
            <BuildControl label="Meat"/> */}
        </div>
    );
}
export default BuildControls;