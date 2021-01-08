import React from "react"
import DrawerButton from "./Drawer/DrawerButton"
import logo from "./Media/logo.png"
import "./NavBar.css"

const NavBar = props => (
    <header className="navbar">
        <nav className="navbar-main">
            <div className="navbar-main-image">
                <img src={logo} alt="logo"/>
            </div>
            <div className="navbar-main-title">
                <a href="/">Mindful</a>
            </div>
            <div className="spacebar"/>
            <div className="navbar-buttons">
                <ul>
                    <li><a href="/">Map</a></li>
                    <li><a href="/">Article</a></li>
                    <li><a href="/">Chatbot</a></li>
                    <li><a href="/">Emergency</a></li>
                    <li><a href="/">About Us</a></li>
                </ul>
            </div>
            <div className="drawer-button">
                <DrawerButton click={props.drawerClickHandler}/>
            </div>
        </nav>
    </header>
)

export default NavBar