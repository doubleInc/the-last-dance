import React from "react";
import Typography from "@material-ui/core/Typography";

import { css, ClassNames } from "@emotion/core";

const Writeup = () => {
  return (
    <div
      css={css`
        background-color: #eee;
        height: 15em;
      `}
    >
      <Typography
        css={css`
          padding-top: 10px;
          font-weight: 100;
          color: #1b5e20;
          text-align: center;
        `}
        variant="h1"
        component="h2"
        gutterBottom
      >
        h1. Heading
      </Typography>
    </div>
  );
};

export default Writeup;
