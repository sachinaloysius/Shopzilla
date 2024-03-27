import React, { useEffect, useState } from "react";
import axios from "axios";
import { ResponsivePie } from "@nivo/pie";

const PieChart = () => {
  const [chartData, setChartData] = useState([]);

  const generateChartData = () => {
    axios
      .get("http://localhost:4777/StockDetails")
      .then((response) => response.data)
      .then((data) => {
        setChartData(data.stocks);
      });
  };
  useEffect(() => {
    generateChartData();
  }, []);

  if (!Array.isArray(chartData) || chartData.length === 0) {
    return <div>No data available for the pie chart</div>;
  }

  return (
    <div style={{ width: "700px", height: "400px" }}>
      <ResponsivePie
        data={chartData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "nivo" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsSkipAngle={10}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
       
      />
    </div>
  );
};

export default PieChart;
