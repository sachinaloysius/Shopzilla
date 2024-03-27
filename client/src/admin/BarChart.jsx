import React, { useEffect, useState } from "react";
import axios from "axios";
import { ResponsiveBar } from "@nivo/bar";

const BarChart = () => {
  const [chartData, setChartData] = useState([]);

  const generateChartData = () => {
    axios
      .get("http://localhost:4777/StockDetailss")
      .then((response) => response.data)
      .then((data) => {
        setChartData(data.stocks);
      });
  };

  useEffect(() => {
    generateChartData();
  }, []);

  if (!Array.isArray(chartData) || chartData.length === 0) {
    return <div>No data available for the bar chart</div>;
  }



  return (
    <div style={{ width: "500px", height: "320px" }}>
      <ResponsiveBar
        data={chartData}
        keys={["value"]}
        indexBy="id"
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: "nivo" }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Stocks",
          legendPosition: "middle",
          legendOffset: 36,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Quantity",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default BarChart;
