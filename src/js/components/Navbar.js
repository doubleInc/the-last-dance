import React, { Component } from "react";
import { Link, navigate } from "@reach/router";
import { css, ClassNames } from "@emotion/core";
import { auth, googleAuthProvider } from "../../../firebase";

// dashboard compenent
import Userdash from "./Userdash";

// css styling from separate file
import { linkText, logo, logoText } from "./navbar.styles";
// materialui components
import {
  AppBar,
  Avatar,
  Typography,
  Toolbar,
  Button,
  IconButton,
} from "@material-ui/core";
import EcoIcon from "@material-ui/icons/Eco";
// from material color library
import green from "@material-ui/core/colors/green";

class Navbar extends Component {
  state = {
    loggedIn: false,
    currentUser: null,
  };

  static LoggedIn = ({ on, usrimg }) =>
    on ? <Userdash usrimg={usrimg} /> : null;

  static LoggedOut = ({ on }) =>
    on ? null : (
      <Button
        onClick={() => auth.signInWithPopup(googleAuthProvider)}
        css={css`
          color: white;
          border: 1px solid white;
        `}
      >
        Log In
      </Button>
    );

  // component update before loading dom
  componentDidMount = async () => {
    await auth.onAuthStateChanged((currentUser) => {
      console.log("AUTH_CHANGE", currentUser, this.state.loggedIn);
      if (currentUser !== null) {
        this.setState({
          currentUser,
          loggedIn: true,
        });
      } else {
        this.setState({
          currentUser,
          loggedIn: false,
        });
      }
    });
  };

  render() {
    const usrimg = this.state.currentUser
      ? this.state.currentUser.photoURL
      : null;
    return (
      <div
        css={css`
          flex-grow: 1;
        `}
      >
        <AppBar position="static">
          <Toolbar
            css={css`
              background-color: ${green[900]};
            `}
          >
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Link css={linkText} to="/">
                <EcoIcon css={logo} style={{ fontSize: "2em" }} />
              </Link>
            </IconButton>
            <Typography variant="h6" css={logoText}>
              CycleIT
            </Typography>
            {React.Children.map(this.props.children, (child) =>
              React.cloneElement(child, {
                on: this.state.loggedIn,
                usrimg: usrimg,
              })
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
