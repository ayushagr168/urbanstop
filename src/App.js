import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import ErrorCard from "./Cards/ErrorCard";
import ActivityStreamCard from "./Cards/ActivityStreamCard";
import AssignedToMeCard from "./Cards/AssignedToMeCard";
import BusinessimpactCard from "./Cards/BusinessImpactCard";
import BusinessimpactChart from "./Cards/BusinessImpactChart";
import DataQualityIndex from "./Cards/DataQualityIndex";
import DataStatistics from "./Cards/DataStatistics";
function App() {
  return (
    <div className='App'>
      <div style={{ overflowX: "hidden", height: "100vh" }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <DataStatistics />
          </Grid>
          <Grid item xs={4}>
            <DataQualityIndex />
          </Grid>
          <Grid item xs={4}>
            <ErrorCard />
          </Grid>
          <Grid item xs={4}>
            <AssignedToMeCard />
          </Grid>
          <Grid item xs={4}>
            <BusinessimpactChart />
          </Grid>
          <Grid item xs={4}>
            <BusinessimpactCard />
          </Grid>
          <Grid item xs={4}>
            <ActivityStreamCard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
