import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import theme from "../theme";

const useStyles = (props: any) =>
  makeStyles({
    root: {
      backgroundColor: theme.palette.common.white,
      padding: props?.noPadding ? theme.spacing(0.0) : theme.spacing(2.5),
      boxShadow: "none",
      minWidth: 270,
      "&:hover": {
        cursor: props?.hoverEffect ? "pointer" : "",
        transition: props?.hoverEffect ? "0.5s" : "none",
        boxShadow: props?.hoverEffect
          ? "0 2px 4px 0 rgba(0, 0, 0, 0.3)"
          : "none",
      },
    },
  });

/* eslint-disable-next-line */
export interface PlainCardProps {
  children: React.ReactNode | React.ReactNodeArray;
  noPadding?: boolean;
}

export const PlainCard = (props: PlainCardProps) => {
  const { children } = props;
  const classes = useStyles(props)();
  return <Card className={classes.root}>{children}</Card>;
};

export default PlainCard;
