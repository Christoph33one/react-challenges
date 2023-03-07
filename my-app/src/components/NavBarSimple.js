import React, { Component } from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            message: "Hello, guest!",
            buttonText: "Log in"
        }
    }
    // 'message' is now conditionally rendered in the handleClick function (  message: prevState.message ) 
    // this.setState((prevState) => ({ ... })? this will change text back and fourth whe user clicks button
    // referenced the prevState of message withing the this.setState method ( message: prevState.message === )
    // console logged state.message to the console to see the output.
  
    handleclick = () => {
        this.setState((prevState) => ({
            message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
            buttonText: prevState.buttonText === "Log out" ? "Log in" : "Log out",
        }), ()=> console.log(this.state.message))
        
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.message}</span>
                    <button onClick={() => this.handleclick()}>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}

export default NavBarSimple

// command to run in the browser - npm start