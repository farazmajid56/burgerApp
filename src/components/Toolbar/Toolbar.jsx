import './Toolbar.css';

function Toolbar(props) {
    return (
        <div id="toolbarContainer">
            <button id="firstButton" className="iconButton" onClick={props.toggleDrawer}>Sidebar</button>
            <h1 id="header">Burger Builder</h1>
            <button id="thirdButton" className="iconButton">Checkout</button>
        </div>
        );
}

export default Toolbar;
