/*
  Unused component! - Ignore
*/

import React from "react";
import { css, ClassNames } from "@emotion/core";
import TextField from "@material-ui/core/TextField";

const Searchmap = () => {
  return (
    <form
      noValidate
      autoComplete="off"
      css={css`
        text-align: center;
      `}
    >
      <em>Enter your suburb and state</em>
      <TextField
        id=""
        label="Enter your suburb and state"
        css={css`
          width: 300px;
        `}
      />
    </form>
  );
};

export default Searchmap;
