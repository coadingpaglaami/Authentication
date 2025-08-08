"use client";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const SalesAnalytics = () => {
  const [activeButton, setActiveButton] = useState("Revenue");
  const data = {
    labels: [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [2000, 3500, 4000, 3000, 2500, 4500, 5000, 5500],
        borderColor: "#A855F7",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(168, 85, 247, 0.4)");
          gradient.addColorStop(1, "rgba(13, 13, 41, 0.1)");
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "#A855F7",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows custom height without stretching
    plugins: {
      legend: { display: false },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        beginAtZero: true,
        ticks: { callback: (value) => `$${value}`, stepSize: 1000 },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
    },
    animation: {
      duration: 2000,
      easing: "easeInOutQuad",
    },
  };

  return (
    <div className="bg-[#0D0D29] text-white p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold">Sales Analytics</h2>
          <p className="text-gray-400 text-sm">
            Track your merchandise sales performance
          </p>
        </div>
        <div className="flex space-x-2 items-center">
          <span className="text-gray-400 hover:text-white px-2 py-1 rounded">
            Show:
          </span>
          {/* <div className="flex flex-row px-2 border rounded-full">
          <button className="border-r px-2 ">Revenue </button>
          <button className="px-2 ">Units</button>
          </div> */}
          <div className="flex flex-row px-2 border rounded-full bg-gray-800 relative overflow-hidden z-10">
            <button
              className={`border-r px-2 text-sm font-medium ${
                activeButton === "Revenue"
                  ? "text-white bg-[#C7C8DA]"
                  : "text-gray-400 hover:text-white"
              } transition-colors duration-200`}
              onClick={() => setActiveButton("Revenue")}
            >
              Revenue
            </button>
            <button
              className={`px-4 text-sm font-medium ${
                activeButton === "Units"
                  ? "text-white bg-[#C7C8DA]"
                  : "text-gray-400 hover:text-white"
              } transition-colors duration-200`}
              onClick={() => setActiveButton("Units")}
            >
              Units
            </button>
            <span
              className="absolute h-full bg-[#C7C8DA] transition-all duration-300 ease-in-out -z-10"
              style={{
                width: "50%",
                left: activeButton === "Revenue" ? "0" : "50%",
                top: 0,
                zIndex: 0,
              }}
            />
          </div>
          <button className="text-gray-400 hover:text-white px-2 py-1 rounded">
            Daily
          </button>
          <button className="text-gray-400 hover:text-white px-2 py-1 rounded">
            Weekly
          </button>
          <button className="text-gray-400 hover:text-white px-2 py-1 rounded">
            Monthly
          </button>
        </div>
      </div>
      <div className="w-full h-64">
        {" "}
        {/* Fixed height to maintain clarity */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};
