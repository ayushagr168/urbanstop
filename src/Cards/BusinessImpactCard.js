import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, Grid } from "@material-ui/core";
import ListData from "../UtilsComponent/ListData";
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
    width: "25rem",
  },
  cardcontent: {
    padding: ".8rem",
    paddingTop: "0px",
  },
});

export default function BusinessimpactCard() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <Grid className={classes.header}>
          <Grid>
            <Typography className={classes.titleLeft}>
              Highest Business Impact
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.titleRight}>MORE ></Typography>
          </Grid>
        </Grid>
        <Grid className={classes.cardcontent}>
          <ListData
            title='Premium less than zero'
            details='MARKETING W0RKFLOW 1'
            amount='$1500.00'
            riskClass='HIGH'
          />{" "}
          <ListData
            title='Premium less than zero'
            details='MARKETING W0RKFLOW 1'
            amount='$1430.00'
            riskClass='MEDIUM'
          />
          <ListData
            title='Premium less than zero'
            details='MARKETING W0RKFLOW 1'
            amount='$1500.00'
            riskClass='HIGH'
          />{" "}
          <ListData
            title='Premium less than zero'
            details='MARKETING W0RKFLOW 1'
            amount='$1500.00'
            riskClass='HIGH'
          />
        </Grid>
      </Card>
    </div>
  );
}
