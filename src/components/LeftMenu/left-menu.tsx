import Box from "@material-ui/core/Box/Box";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import clsx from "clsx";
import React from "react";
// import ArrowForward from '../Assets/svg/ArrowForward.svg';
import logo from "../../logo.svg";
import theme from "../theme";
/* eslint-disable-next-line */
interface NavItem {
  icon?: React.ReactElement;
  text: String;
  path: string;
  activeIcon?: React.ReactElement;
}
export interface LeftNavBarProps {
  items: Array<NavItem>;
}

export const LeftNavBar = (props: LeftNavBarProps) => {
  const drawerWidth = 180;
  const useStyles = makeStyles({
    drawerOpen: {
      width: drawerWidth,
      [theme.breakpoints.up(1366)]: {
        width: "180px",
      },
      [theme.breakpoints.up(1440)]: {
        width: "200px",
      },
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: 62,
    },
    toolbar: {
      display: "flex",
      justifyContent: "flex-end",
      height: "100%",
      alignItems: "flex-end",
      marginBottom: "15px",
      padding: theme.spacing(0, 2.125),
      overflow: "hidden",
    },

    paperAnchorDockedLeft: {
      borderRight: "none",
      boxShadow: "none",
      overflow: "hidden",
    },
    list: {
      margin: "0px 10px",
    },
    listItemIcon: {
      minWidth: 0,
    },
    listItemClose: {
      maxHeight: 43,
    },

    iconSize: {
      width: 24,
      height: 24,
    },
    listItemText: {
      marginLeft: "10px",
      "& span": {
        fontSize: 13,
        fontWeight: 600,
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: 1.77,
        letterSpacing: "normal",
        color: "#000000",
      },
    },
    logo: {
      height: 57,
      marginTop: 30,
      marginBottom: 24,
      marginLeft: 27,
      marginRight: 26,
      [theme.breakpoints.up(1440)]: {
        marginLeft: 37,
        marginRight: 36,
      },
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      width: 127,
      backgroundPosition: "center  left",
      backgroundColor: "transparent",
      transitionDuration: "0.6s",
      transitionTimingFunction: "ease-in-out",
    },

    circleShapeButton: {
      width: 30,
      minWidth: "30px",
      minHeight: "30px",
      height: 30,
      borderRadius: "50%",
      border: "1px solid #666666",
      display: "flex",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#000000 !important",
        transition: "0.5",
        color: "#ffffff !important",
      },
    },
    arrowForwardStyles: {
      width: 10,
      height: 10,
      margin: "auto",
      transform: "rotate(180deg)",
      transitionDelay: "0.6s",
      transitionProperty: "transform",
      transitionDuration: "0.3s",
    },
    arrowBackwardStyles: {
      width: 10,
      height: 10,
      margin: "auto",
      transitionDelay: "0.6s",
      transitionProperty: "transform",
      transitionDuration: "0.3s",
    },
    // textStyle: {
    //   display: "flex",
    //   alignItems: "center",
    // },
  });

  const classes = useStyles(props);
  const { items } = props;
  const [open, setOpen] = React.useState(true);

  return (
    <nav>
      <Drawer
        variant="permanent"
        className={clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
          paperAnchorDockedLeft: classes.paperAnchorDockedLeft,
        }}
      >
        {open ? (
          <img src={logo} alt="KH Logo" className={classes.logo} />
        ) : (
          <img
            src={logo}
            alt="KH Logo"
            className={classes.logo}
            style={{ marginLeft: 11 }}
          />
        )}

        <List className={classes.list}>
          {items.map((_, index) => (
            <ListItem button key={index}>
              {/* React Router integration can be done here */}
              <ListItemIcon
                className={clsx(classes.listItemIcon, classes.iconSize)}
              >
                {_.activeIcon || <></>}
              </ListItemIcon>

              <ListItemIcon
                className={clsx(classes.listItemIcon, classes.iconSize)}
              >
                {_.icon || <></>}
              </ListItemIcon>
              <ListItemText className={classes.listItemText} primary={_.text} />
            </ListItem>
          ))}
        </List>
        <Box className={classes.toolbar}>
          <div
            style={
              open
                ? {
                    opacity: 1,
                    width: "115px",
                    overflow: "hidden",
                    height: "25px",
                    transition: "all 0.3s !important",
                    transitionTimingFunction: "eae-in-out",
                    marginTop: 3,
                  }
                : {
                    opacity: 1,
                    width: "0px",
                    height: "25px",
                    overflow: "hidden",

                    transition: "all 0.3s !important",
                    transitionProperty: "ease-in-out",
                    marginTop: 3,
                  }
            }
          >
            Click to Collapse
          </div>
          <Box
            className={classes.circleShapeButton}
            onClick={(e) => setOpen(!open)}
          >
            <ArrowForwardIosIcon
              className={
                open ? classes.arrowForwardStyles : classes.arrowBackwardStyles
              }
            />
          </Box>
        </Box>
      </Drawer>
    </nav>
  );
};

export default LeftNavBar;
