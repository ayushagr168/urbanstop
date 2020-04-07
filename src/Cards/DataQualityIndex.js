import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, Grid } from "@material-ui/core";
import Chart from "../UtilsComponent/Chart";
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
  chip: {
    backgroundColor: "red",
    color: "white",
    width: "1.5rem",
    padding: "3px",
    fontSize: "0.5rem",
    height: "0.8rem",
    marginLeft: "0.3rem",
    borderRadius: "20%",
  },
  amount: {
    color: "red",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  root: {
    width: "25rem",
  },
  cardcontent: {
    padding: ".8rem",
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
              Data Quality Index{" "}
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.titleRight}>MORE ></Typography>
          </Grid>
        </Grid>
        <Grid className={classes.chart}>
          <Chart id='1' />
        </Grid>
      </Card>
    </div>
  );
}
