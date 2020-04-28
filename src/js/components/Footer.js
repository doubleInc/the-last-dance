import React from "react";
import { css, ClassNames } from "@emotion/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const Footer = () => (
  <div
    style={{ margin: "auto", textAlign: "center" }}
    css={css`
      background-color: gray;
      color: white;
      padding-top: 1em;
    `}
  >
    <Typography variant="caption" align={"center"}>
      © Copyright 2020
    </Typography>
    <Divider style={{ margin: "24px auto", width: 60 }} />
    <Grid container justify={"center"} spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align={"center"} gutterBottom color={"inherit"}>
          About
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align={"center"} gutterBottom color={"inherit"}>
          Blog
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align={"center"} gutterBottom color={"inherit"}>
          Terms & Conditions
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align={"center"} gutterBottom color={"inherit"}>
          Contact us
        </Typography>
      </Grid>
    </Grid>
  </div>
);

export default Footer;
