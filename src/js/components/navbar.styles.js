import { css } from "@emotion/core";
import styled from "@emotion/styled";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
// from material color library
import green from "@material-ui/core/colors/green";

// emotionjs css
export const linkText = css`
  text-decoration: none;
`;
export const linkButton = (color = "#fff") => css`
  background-color: ${color};
`;

// extend materialui themes and styles(classes)
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  loginButton: {
    backgroundColor: "red",
  },
}));

export const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
