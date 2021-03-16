import React, { Component } from "react";

class Text extends Component {
  state = {
    text: this.props.text
  };

  render() {
    const mystyle = {
      color: "black",
      padding: "20px",
      backgroundColor:"#ADD8E6",
      fontFamily: "Chalkboard",
      fontSize:"70px",
      position: "relative"
    };
    const style1 = {
      color: "#8B0000",
      fontFamily: "Arial",
      fontSize:"30px",
      position: "relative"
    };
    return (
      <div>
      <h1 style={mystyle}>Visit Albania</h1>
      <p style={style1}>Make memories you will never forget!</p>
      </div>
    );
  }
}

export default Text;