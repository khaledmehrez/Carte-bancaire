import React from 'react';
import './carteBankaire.css'

import Input from '../Input/Input';
import Cart from '../CART/CART';


class Carte extends React.Component {

    constructor(props) {
        super(props);
        this.state = {numbercardInput:"",numbercard:"****************",name:"",date:""};
      }
      componentDidMount() {
        
       
      }
      //input card
      handleChangecard= event => {
        let regcard=/^[0-9]*$/
        //let inputArray=event.target.value.split("")
        
        if (regcard.test(event.target.value) ){
          
            
            console.log(this.state.numbercard)
       this.setState({numbercard:event.target.value})
       this.setState({numbercardInput:event.target.value})
         
        }
      
        
          
            
          
       
       
      }
      
      handleChangename= event => {
        let regname=/^\D*$/
        if (regname.test(event.target.value) )

        this.setState({name:event.target.value.toUpperCase()})
        else
       return alert("add a valid name")
     
        
        
       }
     
      
       handleChangedate= event => {
        this.setState({date:event.target.value})
        
       }
       reset=()=> {
       this.setState({numbercardInput:""})
       this.setState({numbercard:""})
       this.setState({name:""})
       this.setState({date:""})
       }
         
    render() {
        return(
            
        <section className="carte-input"> 
           
           <Cart inputText={this.state}  />
          
         <Input Text={this.state} handleChangecard={this.handleChangecard} 
         handleChangename={this.handleChangename} handleChangedate={this.handleChangedate} reset={this.reset}  />
        </section>
        )
      
    }
  }

  export default Carte;
