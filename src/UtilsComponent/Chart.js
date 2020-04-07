import React from "react";
import Highcharts from "highcharts";

class Donut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Risk",
          data: [
            {
              name: "High",
              y: 9,
              color: "red",
            },
            {
              name: "Midium",
              y: 70,
              color: "orange",
            },
            {
              name: "Low",
              y: 19,
              color: "yellow",
            },
          ],
        },
      ],
    };
  }

  highChartsRender() {
    Highcharts.chart({
      chart: {
        type: "pie",
        renderTo: this.props.id,
        style: {
          height: "200px",
        },
      },
      height: 70,
      title: {
        verticalAlign: "middle",
        floating: true,
        text: "Currently",
        style: {
          fontSize: "10px",
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            format: "{point.name}: {point.percentage:.1f} %",
          },
          innerSize: "70%",
        },
      },
      series: this.state.series,
    });
  }

  componentDidMount() {
    this.highChartsRender();
  }

  render() {
    return <div id={this.props.id} style={{ height: "180px" }}></div>;
  }
}

export default Donut;
