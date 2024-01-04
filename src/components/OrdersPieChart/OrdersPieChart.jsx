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

const OrdersPieChart = () => {
  const option = {
    color: [
      new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
        { offset: 0, color: "#1158E2" },
        { offset: 1, color: "#43B5F2" },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
        { offset: 0, color: "#bc1fd7" },
        { offset: 1, color: "#7f1dd1" },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
        { offset: 0, color: "#e8a618" },
        { offset: 1, color: "#eb6b36" },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
        { offset: 0, color: "#d131be" },
        { offset: 1, color: "#eb6b36" },
      ]),
    ],
    series: [
      {
        name: "Item",
        type: "pie",
        radius: ["60%", "80%"],
        avoidLabelOverlap: false,
        itemStyle: { borderRadius: 10, borderColor: "white", borderWidth: 1 },
        label: { show: false, position: "center" },
        emphasis: { label: { show: true, fontsSize: 20, fontWeight: "bold" } },
        data: [
          { value: 2190, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
        ],
      },
    ],
  };

  return (
    <ReactECharts style={{ height: 140, marginTop: "1rem" }} option={option} />
  );
};

export default OrdersPieChart;
