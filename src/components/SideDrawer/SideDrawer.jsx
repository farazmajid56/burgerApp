import React from 'react';
import './SideDrawer.css';

const SideDrawer = (props) => {
    const sideDrawerClass = props.isOpen ? "sideDrawer open" : "sideDrawer";

    return (
        <div className={sideDrawerClass} onClick={props.toggleDrawer}>
            <div className="drawerTop">
                <img src="./logo.jpg" alt="Drawer Image" />
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">About Us</a></li>
                </ul>
            </nav>
        </div>
        );
}

export default SideDrawer;