import React, { Component } from "react";
import "./App.css";
import Tabletop from "tabletop";
import Render from "./render";
import "react-dropdown/style.css";



var data = [];
var id = "";

export default class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (){
    Tabletop.init({
      key: "16bMbUPeFKbJNIAGEMWt-zgnGkNHZDtMQ99meAym3oNI",
      callback: (googleData) => {
        console.log("google sheet data --->", googleData);
        this.setState({
          data: googleData,
        });
      },
      simpleSheet: true,
    });
  };

  componentDidMount() {
    Tabletop.init({
      key: "16bMbUPeFKbJNIAGEMWt-zgnGkNHZDtMQ99meAym3oNI",
      callback: (googleData) => {
        console.log("google sheet data --->", googleData);
        this.setState({
          data: googleData,
        });
      },
      simpleSheet: true,
    });
  }
  render() {
    return (
      this.state &&
      this.state.data && (
        
          <Render data={this.state} refresh={this.handleClick}></Render>
        
      )
      
         
    );
  }

}
