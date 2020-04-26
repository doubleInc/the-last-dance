import React from "react";
import { Link } from "@reach/router";

// css styling from separate file
import { linkText, linkButton, theme, useStyles } from "./navbar.styles";
// materialui components
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  IconButton,
} from "@material-ui/core";
import EcoIcon from "@material-ui/icons/Eco";

export default function Navbar() {
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
              <EcoIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              CycleIT
            </Typography>
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
