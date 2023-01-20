import Header from "parts/Header";
// import React from "react";
import Avatar6 from "../assets/images/icon/avatar-06.jpg";
import Sidebar from "parts/Sidebar";
import Main from "parts/Main";
// import { Component } from "assets/vendor/fullcalendar-3.10.0/fullcalendar";
import React, {Component} from "react";
// import ScriptTag from 'react-script-tag'
import {appendScript} from 'utils/appendScript'
// import { Component } from "assets/vendor/fullcalendar-3.10.0/fullcalendar";
import { render } from "@testing-library/react";

// export default function Dasboard () {
export default class Dasboard extends Component {

  // const Demo = props => (
  //   <ScriptTag type="text/javascript" src="../assets/js/main.js"></ScriptTag>
  // )

  // componentDidMount() {
  //   const script = document.createElement("script");
  //   script.async = true;
  //   script.src = "./assets/js/main.js";
  //   script.onload = () => this.scriptLoaded();

  //   document.body.appendChild(script);
  //   }
  componentDidMount() {
    appendScript("./assets/js/main.js");
  };
 
  render() {
  return (
    <div>
      <div className="page-container">
        <Header></Header>
        <Main></Main>
      </div>
      <Sidebar className="menu-sidebar"></Sidebar>
    </div>

    // document.body.appendChild(script);

  );
}
}


