import React, { useState } from 'react';
import Wrapper from "../../hoc/Wrapper";
import './Layout.css';
import Toolbar from "../../components/Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";
const Layout=(props)=>
{
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return(
        <Wrapper>
            <Toolbar toggleDrawer={toggleDrawer} />
            <SideDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer}/>
            <main className="Main">
                {props.children}
            </main>
        </Wrapper>
    )
}
export default Layout;