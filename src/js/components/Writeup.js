import React from "react";
import Typography from "@material-ui/core/Typography";
import { css, ClassNames } from "@emotion/core";
//Styles

const heading = css`
  padding-top: 10px;
  font-weight: 100;
  color: #1b5e20;
  text-align: center;
`;

const heroText = css`
  background-color: #eee;
  height: 17em;
  margin-bottom: -1em;
`;

const Writeup = ({ children }) => {
  return (
    <div css={heroText}>
      <Typography css={heading} variant="h1" component="h2">
        Recycle unwanted Tech!
        <Typography
          variant="body1"
          gutterBottom
          css={css`
            color: #1b5e20;
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        {children}
      </Typography>
    </div>
  );
};

export default Writeup;
