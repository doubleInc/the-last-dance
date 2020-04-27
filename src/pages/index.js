import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
// App components
import Navbar from "../js/components/Navbar";
import Home from "./home";
import Dashboard from "./dashboard";
//// for development only
import { hot } from "react-hot-loader";
// css file
import "../css/main.css";
// import global reset - normalize.css
import CssBaseline from "@material-ui/core/CssBaseline";

const Main = ({ children }) => (
  <div>
    <CssBaseline />
    <Navbar usrImage="https://www.nicepng.com/png/full/198-1987193_any-transparent-studio-ghibli-photos-and-or-gifs.png">
      <Navbar.LoggedIn />
    </Navbar>
    <Router>
      <Home path="/" />
      <Dashboard path="dashboard" />
    </Router>
  </div>
);

//export default Main;
export default hot(module)(Main);
