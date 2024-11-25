"use client";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

interface ChartProps {
  data: [{ year: number; value: number }];
}
Chart.register(...registerables);

const ChartPopulations = ({ data }: ChartProps) => {
  const years = data.map((item) => item.year);
  const values = data.map((item) => item.value);

  const chartData = {
    labels: years,
    datasets: [
      {
        label: "Population",
        data: values,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-9/10 h-96 mx-auto">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartPopulations;
