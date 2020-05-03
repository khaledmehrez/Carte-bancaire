import React from "react";
import "./carteBankaire.css";

import Input from "../Input/Input";
import Cart from "../CART/CART";

class Carte extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbercardInput: "",
      numbercard: "****************",
      name: "",
      date: "",
      dateInput: "",
    };
  }
  componentDidMount() {}
  //input card
  handleChangecard = (event) => {
    let regcard = /^[0-9]*$/;

    if (regcard.test(event.target.value)) {
      for (let i = 0; i <= this.state.numbercardInput.length; i++) {
        this.setState({
          numbercard: this.state.numbercard
            .replace("*", event.target.value[i])
            .replace(/(\d{4})/g, "$1 "),
        });
        this.setState({ numbercardInput: event.target.value });
      }
    }
  };

  handleChangename = (event) => {
    let regname = /^[a-zA-Z ]*$/;
    if (regname.test(event.target.value))
      this.setState({ name: event.target.value.toUpperCase() });
    else return alert("add a valid name");
  };

  handleChangedate = (event) => {
    let regdate = /([0]{1}[1-9]{1}|[1]{1}[0-2]{1})\/[2]{1}[0-4]{1}/;
    this.setState({ date: event.target.value.replace(/(^\d{2})$/, "$1/") });
    if (event.target.value.length === 5) {
      if (regdate.test(event.target.value) === false) {
        alert("the date: " + event.target.value + " is wrong please try again");
      }
    }
  };
  reset = () => {
    this.setState({ numbercardInput: "" });
    this.setState({ numbercard: "****************" });
    this.setState({ name: "" });
    this.setState({ date: "" });
  };

  render() {
    return (
      <section className="carte-input">
        <Cart inputText={this.state} />

        <Input
          Text={this.state}
          handleChangecard={this.handleChangecard}
          handleChangename={this.handleChangename}
          handleChangedate={this.handleChangedate}
          reset={this.reset}
        />
      </section>
    );
  }
}

export default Carte;
