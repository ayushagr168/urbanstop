import React from "react";
import Highcharts from "highcharts";
import { makeStyles } from "@material-ui/core/styles";
import HighchartsReact from "highcharts-react-official";
const useStyles = makeStyles((theme) => ({
  container: { height: "200px" },
}));

const options = {
  yAxis: {},

  xAxis: {
    accessibility: {
      rangeDescription: "Range: 2010 to 2017",
    },
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 10,
    },
  },

  series: [
    {
      name: "Invcoming Data",
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
    },
    {
      name: "No of erros detetected",
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
    },
    {
      name: "No of errors fixed",
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
    },
    {
      name: "No of erros unassigned",
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
    },
    {
      name: "Other",
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
};

export default function Graph() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <HighchartsReact
        className={classes.hello}
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
}
