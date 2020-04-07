import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },

  titleLeft: {
    fontSize: "1.2rem",
    padding: "0.5rem",
    fontWeight: "bold",
  },
  titleRight: {
    color: "blue",
    fontSize: "0.7rem",
    padding: "0.5rem",
  },
  title: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  details: {
    fontSize: "0.8rem",
    opacity: "0.7",
  },
  chipRed: {
    backgroundColor: "#b71c1c",
    color: "white",
    // width: "1.5rem",
    padding: "3px",
    fontSize: "0.5rem",
    height: "0.8rem",
    marginLeft: "0.3rem",
    borderRadius: "20%",
  },
  chipOrange: {
    backgroundColor: "orange",
    color: "white",
    // width: "1.5rem",
    padding: "3px",
    fontSize: "0.5rem",
    height: "0.8rem",
    marginLeft: "0.3rem",
    borderRadius: "20%",
  },
  amountRed: {
    color: "#b71c1c",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  amountOrange: {
    color: "orange",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
});

export default function ListData(props) {
  const color = props.riskClass === "high" ? "red" : "orange";
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.header}>
        <Grid className={classes.column}>
          <Grid className={classes.header}>
            <Typography className={classes.title}>{props.title}</Typography>
            <Typography
              className={
                props.riskClass === "HIGH"
                  ? classes.chipRed
                  : classes.chipOrange
              }
            >
              {props.riskClass}
            </Typography>
          </Grid>
          <Grid className={classes.header}>
            <Typography className={classes.details}>{props.details}</Typography>
          </Grid>
        </Grid>
        <Grid>
          <Typography
            className={
              props.riskClass === "HIGH"
                ? classes.amountRed
                : classes.amountOrange
            }
          >
            {props.amount}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
