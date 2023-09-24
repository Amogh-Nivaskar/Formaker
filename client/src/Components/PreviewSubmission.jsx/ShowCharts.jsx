import { useState } from "react";
import BarChart from "./Charts/BarChart";
import PieChart from "./Charts/PieChart";

function ShowCharts({ labels, answersFreq, chartLabel }) {
  const [selectedChart, setSelectedChart] = useState("bar");
  return (
    <div className=" flex flex-col gap-6 justify-start items-center w-full h-screen">
      <div className=" flex w-1/6 justify-between rounded-full border-1 border-indigo-500">
        <div
          className={`flex justify-center flex-1 p-1 rounded-l-full cursor-pointer ${
            selectedChart === "bar"
              ? "bg-indigo-400 text-white "
              : " hover:bg-indigo-300"
          } `}
          onClick={() => setSelectedChart("bar")}
        >
          <span className={`text-lg tracking-wide font-semibold`}>
            Bar Chart
          </span>
        </div>
        <div
          className={`flex justify-center flex-1 p-1 rounded-r-full cursor-pointer ${
            selectedChart === "pie"
              ? "bg-indigo-400 text-white "
              : " hover:bg-indigo-300"
          } `}
          onClick={() => setSelectedChart("pie")}
        >
          <span className={`text-lg tracking-wide font-semibold`}>
            Pie Chart
          </span>
        </div>
      </div>
      {selectedChart === "bar" && (
        <div className=" flex w-[60%] h-[60%] justify-center">
          <BarChart
            labels={labels}
            answersFreq={answersFreq}
            chartLabel={chartLabel}
          />
        </div>
      )}

      {selectedChart === "pie" && (
        <div className=" flex w-[60%] h-[60%] justify-center">
          <PieChart
            labels={labels}
            answersFreq={answersFreq}
            chartLabel={chartLabel}
          />
        </div>
      )}
    </div>
  );
}

export default ShowCharts;
