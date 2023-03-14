import React, { Component } from 'react'
import css from "./css/NavBarForm.module.css";
import NavBarChild from './NavBarChild';



class NavBarForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn: true,
        }
    }
    handleButtonClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn ? false: true
        }),  () => console.log(this.state.isLoggedIn))
    }



// {this.state.isLoggedIn}, conditionaly renders LogedIn to Submit when the user clicks!
  render() {
    return (
        <div className= {css.NavBar}>
            <h1>My Gallery</h1>
            
                {/* { this.state.isLoggedIn ? 
                    <button onClick={() => this.handleButtonClick()}>LogIn</button>

                :

                    <form>
                        <label>User name:</label>
                        <input placeholder='username' id='username' />

                        <label>password:</label>
                        <input placeholder='password' id='password' />
                        <button onClick={() => this.handleButtonClick()}>Submit</button>
                    </form>
                } */}

            <NavBarChild
            isLoggedIn={this.state.isLoggedIn}
            handleClick={this.handleButtonClick}
            />
        </div>
        // NESTED COMPONENTS METHOD!
        // Import the child component (NavBarchild)
        // Here we used nested compoents method by passing the above code to a child file
        // Then with the method above, passed the isLoggedIn and handleClick as props to the child component.
        //

    )
  }
}

export default NavBarForm