// React

// Thirdparty
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

// Utils

// APISlices

// Slice

// CustomHooks

// Components

// Constants

// Enums

// Interfaces

// Styles

// Local enums

// Local constants

// Local Interfaces

const StatisticsChart = () => {
  const option = {
    color: ["var(--black)"],
    toolbox: { feature: { saveAsImage: {} } },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "cross" },
      backgroundColor: "rgba(255,255,255,0.59)",
      borderWidth: 0,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
      show: false,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: { show: false },
      },
    ],
    series: [
      {
        type: "line",
        smooth: true,
        lineStyle: { color: "#000000", width: 4 },
        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
            { offset: 0, color: "#000" },
            { offset: 1, color: "rgba(255, 255, 255, 0)" },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        showSymbol: false,
        data: [28000, 19000, 32000, 18000, 41000, 30000, 26000],
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export default StatisticsChart;
