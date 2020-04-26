import React, { Component } from "react";
import { Link } from "@reach/router";
import { css, ClassNames } from "@emotion/core";

// css styling from separate file
import {
  linkText,
  linkButton,
  logo,
  logoText,
  avatarStyle,
  classes,
} from "./navbar.styles";
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
  };

  static LoggedIN = ({ children }) => children;
  static LoggedOUT = ({ children }) => children;

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
            <Avatar
              css={avatarStyle}
              alt="User avatar"
              src={this.props.usrImage}
            />
            <Button style={classes.loginDash}>
              <Link css={linkText} to="dashboard">
                Dashboard
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
