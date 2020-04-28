import React from "react";
import { css, ClassNames } from "@emotion/core";
// Materialui components
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

// Components
import Writeup from "../js/components/Writeup";
import Mapoverlay from "../js/components/Maplay";
import Footer from "../js/components/Footer";

class Home extends React.Component {
  state = {
    searchLocation: [-33.8545702, 151.0255673],
    searchValue: "",
  };

  //
  locationLookup = (event) => {
    event.preventDefault();
    this.setState({
      searchValue: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Container
          css={css`
            margin-top: 2em;
            margin-bottom: 2em;
          `}
          fixed
        >
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
          >
            <Writeup>
              <form
                noValidate
                autoComplete="off"
                css={css`
                  text-align: center;
                `}
                onSubmit={this.locationLookup}
              >
                <TextField
                  id="standard-basic"
                  label="Enter your location"
                  css={css`
                    width: 300px;
                  `}
                  name="mapsearch"
                  value={this.state.searchValue}
                  onChange={this.handleChange}
                />
              </form>
            </Writeup>
            <Mapoverlay />
          </Typography>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
