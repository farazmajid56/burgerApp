import './BuildControl.css';

const BuildControl=(props)=>{
    return(
        <div className="BuildControl">
            <div className='Label'>{props.label}</div>
            <button className='Less' onClick={props.remove} disabled={props.disable} >Less</button>
            <button className='More'onClick={props.add}>More</button>
        </div>
    )
}
export default BuildControl;