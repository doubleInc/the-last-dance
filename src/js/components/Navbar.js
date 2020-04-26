import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

// css styling from separate file
import {
  linkText,
  linkButton,
  theme,
  useStyles,
  logo,
  avatarStyle,
} from "./navbar.styles";
// materialui components
import { ThemeProvider } from "@material-ui/core/styles";
import {
  AppBar,
  Avatar,
  Typography,
  Toolbar,
  Button,
  IconButton,
} from "@material-ui/core";
import EcoIcon from "@material-ui/icons/Eco";

export default function Navbar(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <Link css={linkText} to="/">
                <EcoIcon css={logo} />
              </Link>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              CycleIT
            </Typography>
            <Avatar css={avatarStyle} alt="User avatar" src={props.usrImage} />
            <Button css={linkButton()}>
              <Link css={linkText} to="dashboard">
                Dashboard
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
