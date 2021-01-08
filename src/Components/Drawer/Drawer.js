import React from 'react';
import './Drawer.css'
function Drawer(props){
    return (
        <nav className={props.show ? "drawer open" : "drawer"}>
            <div className="drawer-top">
                <button className="drawer-top-button" href="/" onClick={props.hide}>x</button>
                <p className="drawer-top-title">Menu</p>
            </div>
            <div className="drawer-options">
                <ul className="drawer-options">
                    <li><a href="/">Map</a></li>
                    <li><a href="/">Articles</a></li>
                    <li><a href="/">Chatbot</a></li>
                    <li><a href="/">Emergency</a></li>
                    <li><a href="/">About Us</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Drawer