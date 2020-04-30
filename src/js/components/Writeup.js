import React from "react";
import Typography from "@material-ui/core/Typography";
import { css, ClassNames } from "@emotion/core";
//Styles

const heading = css`
  padding-top: 10px;
  font-weight: 100;
  color: #1b5e20;
  text-align: center;
  @media (max-width: 1280px) {
    font-size: 4em;
  }
  @media (max-width: 960px) {
    font-size: 2.5em;
  }
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
          By recycling household waste you will help save precious natural
          resources. Each year kerbside recycling can save 386,000 tonnes of
          green house gasses. That's 64,000 cars off the road for a whole year!
        </Typography>
        {children}
      </Typography>
    </div>
  );
};

export default Writeup;
