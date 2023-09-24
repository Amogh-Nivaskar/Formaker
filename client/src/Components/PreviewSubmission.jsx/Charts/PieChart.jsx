import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { getRandomColor, shuffleArray } from "../../../utils";

const coloursList = [
  "#f87171",
  "#fb923c",
  "#facc15",
  "#a3e635",
  "#4ade80",
  "#2dd4bf",
  "#38bdf8",
  "#a78bfa",
  "#f472b6",
];

function PieChart({ answersFreq, labels }) {
  let backgroundColor;
  if (answersFreq.length > 9) {
    backgroundColor = [];
    for (let i = 0; i < answersFreq.length; i++) {
      backgroundColor.push(getRandomColor());
    }
  } else {
    backgroundColor = shuffleArray(coloursList);
  }
  const chartData = {
    labels,
    datasets: [
      {
        label: "Answers",
        data: answersFreq,
        backgroundColor,
        borderColor: "black",
        borderWidth: 2,
        weight: 1,
      },
    ],
  };

  ChartJS.defaults.font.size = 20;

  return <Pie data={chartData} />;
}

export default PieChart;
