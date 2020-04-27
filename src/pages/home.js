import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { css, ClassNames } from "@emotion/core";

//
import Writeup from "../js/components/Writeup";
import Mapoverlay from "../js/components/Maplay";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container
          css={css`
            margin-top: 2em;
          `}
          fixed
        >
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
          >
            <Writeup />
            <Mapoverlay />
          </Typography>
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
