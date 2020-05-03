import React from 'react';
import './input.css'


class Input extends React.Component {
  componentDidMount() {
    console.log(this.props.Text.numbercardInput)
  }

 
    render() {
      return  ( 
      <div className="input">
           <input type="text"  name="fname" maxLength="16"  value={this.props.Text.numbercardInput}    onChange={this.props.handleChangecard} placeholder="ENTER RIB"   />
           <input type="text"  name="fname"  value={this.props.Text.name} onChange={this.props.handleChangename} placeholder="ENTER NAME"/>
           <input type="text"  name="fname" maxLength="5" value={this.props.Text.date} onChange={this.props.handleChangedate} placeholder="ENTER DATE"/>
           <button type="button" onClick={this.props.reset}>reset!</button>
           </div>
      

      )
    }
  }

  export default Input;
