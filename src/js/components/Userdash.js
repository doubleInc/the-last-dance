import React from "react";
import { css, ClassNames } from "@emotion/core";
import { Link, navigate } from "@reach/router";
import { auth, googleAuthProvider } from "../../../firebase";
import green from "@material-ui/core/colors/green";
// materialui components
import { Avatar, Button } from "@material-ui/core";

// Styles with emotionjs
const colors = {
  white: "#fff",
};

export const avatarStyle = css`
  margin-right: 0.25em;
  border: 1px solid ${colors.white};
`;

const linkText = css`
  text-decoration: none;
  color: ${colors.white};
`;

// Materialui style classes
const classes = {
  loginDash: {
    backgroundColor: green[900],
    border: "1px solid white",
    color: colors.white,
  },
};

const Userdash = (props) => {
  return (
    <React.Fragment>
      <Avatar css={avatarStyle} alt="User avatar" src={props.usrimg} />
      <Button style={classes.loginDash}>
        <Link css={linkText} to="dashboard">
          Dashboard
        </Link>
      </Button>
      <Button
        style={classes.loginDash}
        onClick={() => {
          auth.signOut();
          navigate("/");
        }}
        css={css`
          margin-left: 0.5em;
        `}
      >
        Log Out
      </Button>
    </React.Fragment>
  );
};

export default Userdash;
