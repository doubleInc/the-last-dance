import React from "react";
import { css, ClassNames } from "@emotion/core";
// Materialui components
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

// Components
import Writeup from "../js/components/Writeup";
import Mapoverlay from "../js/components/Maplay";

// Ajax calls
import { getCoordinates } from "../js/Ajaxcalls";
// firebase
import { database, auth } from "../../firebase";
//ramda
import { props, compose, map } from "ramda";

// Class component
class Home extends React.Component {
  // Test coordinates: auburn = [51, -0.08], uk [-33.8545702, 151.0255673]
  state = {
    searchLocation: [-33.8548157, 151.2164539],
    searchValue: "",
    locations: [],
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

  // component update before loading dom
  componentDidMount = async () => {
    // listen for any change("/" => root) in the db and return a snapshot
    const starCountRef = await database.ref("/").on("value", (snapshot) => {
      // everytime a change occurs in the db, it will be logged to console
      const locations = [];
      snapshot.forEach((child) => {
        locations.push(child.val());
      });

      this.setState({
        locations: locations,
      });
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
            style={{ backgroundColor: "#cfe8fc", height: "830px" }}
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
            <Mapoverlay
              center={this.state.searchLocation}
              locations={this.state.locations}
            />
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
