import { css } from "@emotion/core";
import styled from "@emotion/styled";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
// from material color library
import green from "@material-ui/core/colors/green";

// project colors
const colors = {
  primary: green,
  white: "#fff",
};

// emotionjs css
export const linkText = css`
  text-decoration: none;
  color: ${colors.white};
`;
export const linkButton = (color = colors.white) => css`
  background-color: ${color};
`;
export const logo = css`
  text-decoration: none;
  font-size: 1em;
  color: ${colors.white};
`;
export const avatarStyle = css`
  margin-right: 0.25em;
  border: 1px solid ${colors.white};
`;

export const logoText = css`
  flex-grow: 1;
  color: white;
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
    color: colors.white,
  },
  loginButton: {
    backgroundColor: "red",
  },
}));

export const theme = createMuiTheme({
  palette: {
    primary: colors.primary,
  },
});
