import React from 'react';
import './cart.css'

  
  
class Cart extends React.Component {
    componentDidMount() {
        console.log(this.props.inputText.numbercard)
      }
    render() {
      return(
        <div className="carte">
        <h1> {this.props.inputText.numbercard}</h1>
        <p id="name">{this.props.inputText.name}</p>
        <p id ="date">{this.props.inputText.date}</p>
        </div>
      )
    }
  }
  export default Cart