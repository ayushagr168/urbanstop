import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, Grid } from "@material-ui/core";
import LineChart from "../UtilsComponent/LineChart";
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
    color: "#1565c0",
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
  chip: {
    backgroundColor: "#b71c1c",
    color: "white",
    width: "1.5rem",
    padding: "3px",
    fontSize: "0.5rem",
    height: "0.8rem",
    marginLeft: "0.3rem",
    borderRadius: "20%",
  },
  amount: {
    color: "#b71c1c",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  root: {
    height: "30rem",
  },
});

export default function ErrorCard() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <Grid className={classes.header}>
          <Grid>
            <Typography className={classes.titleLeft}>
              Data Statistics
            </Typography>
          </Grid>
          <Grid></Grid>
        </Grid>
        <LineChart />
      </Card>
    </div>
  );
}
