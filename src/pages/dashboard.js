import React from "react";
import { Router, Link } from "@reach/router";
import { css, ClassNames } from "@emotion/core";
// Materialui components
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
// Ajax calls
import { getCoordinates } from "../js/Ajaxcalls";
// firebase
import { database, auth } from "../../firebase";

//
const textFieldStyle = css`
  margin-left: 1em;
  margin-right: 1em;
  width: 25ch;
`;

const Dashboard = ({ user }) => {
  // state
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState("");
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [suburb, setSuburb] = React.useState("");
  const [feedback, setFeedback] = React.useState({ success: "", error: "" });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const captureValues = async (e) => {
    e.preventDefault();

    if (name.length > 1 && address.length > 1 && suburb.length > 1) {
      const coords = await getCoordinates(`${address}, ${suburb}, ${state}`);
      const location = {
        name,
        address: `${address}, ${suburb}, ${state}`,
        coords,
        type: "technology",
      };

      // add or update "new greeting" key in db
      await database.ref("/").push(location);

      // Resets
      {
        setState("");
        setName("");
        setAddress("");
        setSuburb("");
        setFeedback({
          ...feedback,
          success: "Added location successfully!",
          error: "",
        });
      }
    } else {
      //respond with error
      setFeedback({
        ...feedback,
        success: "",
        error: "An error occurred, please check all fields.",
      });
    }
  };

  return (
    <div>
      <Container
        css={css`
          margin-top: 2em;
          margin-bottom: 2em;
          height: 520px;
        `}
        fixed
      >
        <Typography
          variant="body1"
          gutterBottom
          css={css`
            color: #1b5e20;
            margin-left: 0.5em;
            width: 80%;
            background-color: #eee;
          `}
        >
          <h2
            css={css`
              font-weight: 300;
            `}
          >
            Enter a New Location
          </h2>
          Please fill out all fields below. Postcode is not required as location
          look up will be done with suburb name and state provided.
        </Typography>
        <form onSubmit={captureValues}>
          <TextField
            id="name"
            label=""
            style={{ margin: 8 }}
            placeholder="Organisation name"
            helperText="Organisation name"
            autoComplete="off"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            css={css`
              width: 80%;
            `}
          />
          <br />
          <TextField
            id="street"
            label=""
            style={{ margin: 8 }}
            placeholder="Street Address"
            helperText="Street address"
            fullWidth
            autoComplete="off"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            css={css`
              width: 80%;
            `}
          />
          <br />
          <TextField
            label="Suburb"
            defaultValue=""
            css={textFieldStyle}
            helperText="Suburb name"
            value={suburb}
            onChange={(e) => setSuburb(e.target.value)}
            style={{
              marginLeft: "0.5em",
              marginBottom: "1em",
            }}
          />
          <InputLabel
            id="state-open-select-label"
            css={css`
              margin-top: 0.5em;
              margin-left: 0.5em;
            `}
          >
            State
          </InputLabel>
          <Select
            labelId="state-open-select-label"
            id="state-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={state}
            onChange={(e) => setState(e.target.value)}
            css={css`
              width: 5em;
              margin-top: 0.5em;
              margin-left: 0.5em;
            `}
          >
            <MenuItem value={"NSW"}>NSW</MenuItem>
            <MenuItem value={"ACT"}>ACT</MenuItem>
            <MenuItem value={"VIC"}>VIC</MenuItem>
            <MenuItem value={"QLD"}>QLD</MenuItem>
            <MenuItem value={"SA"}>SA</MenuItem>
            <MenuItem value={"NT"}>NT</MenuItem>
            <MenuItem value={"WA"}>WA</MenuItem>
          </Select>
          <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: "blue",
              marginLeft: "2em",
              marginBottom: "0.5em",
              color: "white",
            }}
          >
            Submit
          </Button>
        </form>
        <div>
          {feedback.success.length > 1 ? (
            <p
              css={css`
                color: green;
              `}
            >
              {feedback.success}
            </p>
          ) : null}
          {feedback.error.length > 1 ? (
            <p
              css={css`
                color: red;
              `}
            >
              {feedback.error}
            </p>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
