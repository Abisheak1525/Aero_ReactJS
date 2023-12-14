
import React, { Component } from 'react'

export default class StateClassComp extends Component {
    state={
        color:"blue",
        price:121
    }
    //Arrow Function 
    handleChaneg=()=>{this.setState({color:"black"})}
    render() 
    {
        return (
        <div>
            <h1>The color i have seleted is {this.state.color} <br/>the price is {this.state.price} </h1>
            <button onClick={this.handleChaneg} style={{background:"aliceblue"}}>conClick</button>
        </div>
    )
  }
}
