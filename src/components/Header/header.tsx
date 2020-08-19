import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import logo from "../../logo.svg";
import theme from "../theme";
// const drawerWidth = 180;

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
});

/* eslint-disable-next-line */
export interface HeaderProps {
  showLogo: boolean;
}
export const Header = (props: HeaderProps) => {
  const classes = useStyles();
  const { showLogo } = props;

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar variant="dense" disableGutters>
          {showLogo && (
            <Box my={0.5} ml={2.875}>
              <img src={logo} height="44px" width="98px" alt="img" />
            </Box>
          )}
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
