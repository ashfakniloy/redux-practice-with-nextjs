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
import { Doughnut } from "react-chartjs-2";
// import { Chart, registerables } from "chart.js";
import Chart from "chart.js/auto";

function DoughnutChart() {
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
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [6000, 4000],
        fill: true,
        borderColor: ["white"],
        backgroundColor: ["rgba(255, 206, 86, 1)", "blue"],
        // pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        // pointBorderColor: "rgba(255, 206, 86, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className=" bg-white p-7 shadow-lg">
      <h1 className="my-5 text-2xl">Doughnut chart</h1>
      <div className="h-[350px]">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default DoughnutChart;
