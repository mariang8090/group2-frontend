import React from "react"
import "./DrawerButton.css"

const DrawerButton = props =>(
            <button className="drawerButton" onClick={props.click}>
                <div className="drawerButton-line"></div>
                <div className="drawerButton-line"></div>
                <div className="drawerButton-line"></div>
            </button>
)

export default DrawerButton