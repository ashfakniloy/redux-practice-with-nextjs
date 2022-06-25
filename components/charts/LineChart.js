// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
import { Line } from "react-chartjs-2";
// import { Chart, registerables } from "chart.js";
import Chart from "chart.js/auto";

function LineChart() {
  // ChartJS.register(
  //   CategoryScale,
  //   LinearScale,
  //   PointElement,
  //   LineElement,
  //   Title,
  //   Tooltip,
  //   Legend
  // );

  // Chart.register(...registerables);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [3, 2, 2, 1, 5],
        fill: true,
        borderColor: ["rgba(255, 206, 86, 0.2)"],
        backgroundColor: ["rgba(255, 206, 86, 0.2)"],
        pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        pointBorderColor: "rgba(255, 206, 86, 0.2)",
      },
      {
        label: "Sales for 2019 (M)",
        data: [1, 3, 2, 2, 3],
        fill: true,
        borderColor: ["rgba(54, 162, 235, 0.2)"],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        pointBackgroundColor: "rgba(54, 162, 235, 0.2)",
        pointBorderColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white p-5 shadow-lg">
      <h1 className="my-5 text-2xl">Line chart</h1>
      <div className="w-[600px] h-[350px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default LineChart;
