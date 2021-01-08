import React from "react"
import "./App.css";
import NavBar from "./Components/NavBar";
import Drawer from "./Components/Drawer/Drawer"
import Backdrop from "./Components/Backdrop/Backdrop"

class App extends React.Component{
  state = {
    sideDrawerOpen: false
  }
  drawerHandler = () => {
    this.setState(prevState => {
      return {sideDrawerOpen : !prevState.sideDrawerOpen}
    })
  }
  render(){
    return (
      <div className="App">
        <NavBar drawerClickHandler={this.drawerHandler}/>
        {this.state.sideDrawerOpen && <Backdrop />}
        <Drawer show={this.state.sideDrawerOpen} hide={this.drawerHandler}/>
        <p>h</p>
      </div>
    );
  }
} 

export default App;
