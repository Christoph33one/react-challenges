import React, { Component } from 'react'
import importedNames from '../names'

export class SearchBar1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        names: importedNames
      }
    }
    handleChange = (event) => {
        const inputText = event.target.value.toLowerCase()
        console.log(inputText)
        const filterNames = importedNames.filter(name  => {
            return name.toLowerCase().includes(inputText)
        })
        this.setState({
            names: filterNames
        })
    }
  render() {
    return (
        // matching names found: {this.state.names.length} give the number of names i.e 100
      <div>
            <h1>Name Search</h1>
            <p>matching names found: {this.state.names.length}</p>
            <form>
                <input
                onChange={(event) => this.handleChange(event)}
                text="text"
                placeholder="search names..." />
            </form>
            <div style={{margin: 'auto'}}>
            {this.state.names.map(names => {
                return <p key={names}>{names}</p>
                
            })}
            </div>
      </div>
    )
  }
}

export default SearchBar1