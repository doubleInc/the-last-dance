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

// Ajax calls
import { getCoordinates } from "../js/Ajaxcalls";

// Class component
class Home extends React.Component {
  // Test coordinates: auburn = [51, -0.08], uk [-33.8545702, 151.0255673]
  state = {
    searchLocation: [-33.8548157, 151.2164539],
    searchValue: "",
  };

  //
  locationLookup = async (event) => {
    event.preventDefault();

    const res = await getCoordinates(this.state.searchValue);

    const { lat, lng } = res;

    console.log(res);

    this.setState({
      searchLocation: [lat, lng],
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
            <Mapoverlay center={this.state.searchLocation} />
          </Typography>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
