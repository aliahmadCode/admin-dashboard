import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MyChart = () => {
  const data = {
    labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov", "Dec"],
    datasets: [
      {
        label: "Material Purchases",
        data: [450, 200, 300, 150, 200, 300, 400],
        backgroundColor: "#528476",
        maxBarThickness: 20,
      },
      {
        label: "Vendor Cost",
        data: [250, 230, 200, 150, 100, 100, 200],
        backgroundColor: "#95c860",
        maxBarThickness: 20,
      },
      {
        label: "Employee Cost",
        data: [300, 320, 300, 150, 200, 300, 200],
        backgroundColor: "#ebedf0",
        maxBarThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category",
        stacked: true,
        beginAtZero: true,
        categoryPercentage: 0.5,
        barPercentage: 0.8,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
    layout: {
      padding: {
        top: -7.6,
      },
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    
  };

  return <Bar data={data} options={options} />;
};

export default MyChart;
