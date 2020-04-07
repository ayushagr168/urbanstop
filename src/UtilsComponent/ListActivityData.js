import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import Share from "@material-ui/icons/Share";
import Storage from "@material-ui/icons/Storage";
import Sms from "@material-ui/icons/Sms";
import BugReport from "@material-ui/icons/BugReport";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
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
  when: {
    fontSize: "1rem",
    opacity: "0.7",
  },
});
var getIcon = (param) => {
  switch (param) {
    case "share":
      return <Share />;
      break;
    case "bug":
      return <BugReport />;
      break;
    case "play":
      return <PlayCircleFilled />;
      break;
    case "storage":
      return <Storage />;
      break;
  }
};
export default function ListData(props) {
  const color = props.riskClass === "high" ? "red" : "orange";
  const classes = useStyles();
  const icon = props.icon;

  return (
    <div>
      <Grid className={classes.header}>
        <Grid className={classes.titleRight}>{getIcon(props.icon)}</Grid>
        <Grid className={classes.column}>
          <Grid className={classes.header}>
            <Typography className={classes.title}>{props.title}</Typography>
          </Grid>
          <Grid className={classes.header}>
            <Typography className={classes.details}>{props.details}</Typography>
          </Grid>
        </Grid>
        <Grid>
          <Typography className={classes.when}>{props.when}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
