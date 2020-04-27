import React, { Component } from "react";
import { Link } from "@reach/router";
import { css, ClassNames } from "@emotion/core";

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
    loggedIn: true,
  };

  static LoggedIn = ({ on, usrimg }) =>
    on ? <Userdash usrimg={usrimg} /> : null;

  static LoggedOut = ({ on }) => (on ? null : <Button>Log In</Button>);

  render() {
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
                usrimg: this.props.usrImage,
              })
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
