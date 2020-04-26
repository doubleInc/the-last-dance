import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
//
import Navbar from "../js/components/Navbar";
import Home from "./home";
import Dashboard from "./dashboard";
//// for development only
import { hot } from "react-hot-loader";
// css file
import "../css/main.css";

const Main = ({ children }) => (
  <div>
    <Navbar usrImage="https://www.nicepng.com/png/full/198-1987193_any-transparent-studio-ghibli-photos-and-or-gifs.png" />
    <Router>
      <Home path="/" />
      <Dashboard path="dashboard" />
    </Router>
  </div>
);

//export default Main;
export default hot(module)(Main);
