import'./Summary.css';

const Summary=(props)=>{

    let list=props.ing.map(obj=>{
        return(
            <li>{obj.name} : {obj.no}</li>
        )
    })
    return(
        <div className='SummaryDisplay'>
            <div>Your Order</div>
            <div>
                Buger is Ready with following ingredients
            </div>
            <ul>
                {list}
            </ul>
            <p>Do you wish to proceed to Checkout ?</p>
            <button id="cancel" className="summaryButton" onClick={props.hideSummary}>Cancel</button>
            <button id="continue" className="summaryButton" onClick={props.hideSummary}>Continue</button>
        </div>
    )
}
export default Summary;