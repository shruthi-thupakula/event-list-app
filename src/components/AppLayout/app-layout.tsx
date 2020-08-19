import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import EventList from "../EventList/event-list";
import Header from "../Header";
import LeftNavBar from "../LeftMenu";
import theme from "../theme";

export const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(2.75),
    marginTop: theme.spacing(6.5),
  },
  container: {
    maxWidth: "1140px",
    margin: "0 auto",
  },
});

export const AppLayout = () => {
  const classes = useStyles({});
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Header showLogo />
        <LeftNavBar
          items={[
            {
              text: "Home",
              path: "",
              icon: <HomeOutlinedIcon />,
            },
          ]}
        />

        <main className={classes.content}>
          <div className={classes.container}>{<EventList />}</div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default AppLayout;
