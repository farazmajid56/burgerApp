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
        </div>
    )
}
export default Summary;