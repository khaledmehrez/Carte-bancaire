import React from 'react';


  
  
class Cart extends React.Component {
    componentDidMount() {
        console.log(this.props.inputText.numbercard)
      }
    render() {
      return(
        <div className="carte">
        <h1> {this.props.inputText.numbercard}</h1>
        <p>{this.props.inputText.name}</p>
        <p>{this.props.inputText.date}</p>
        </div>
      )
    }
  }
  export default Cart