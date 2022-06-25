import Link from "next/link";
import BarChart from "../components/charts/BarChart";
import LineChart from "../components/charts/LineChart";
import DoughnutChart from "../components/charts/PieChart";
import EventCalendar from "../components/Schedule/EventCalendar";

function ChartsPage() {
  return (
    <div className="p-10 bg-slate-100">
      <Link href="/">Go to home</Link>
      <div className="my-5">
        <h1 className="mb-5 text-center text-2xl">Charts page</h1>
        <div className="flex flex-wrap gap-4">
          <LineChart />
          <BarChart />
          <DoughnutChart />
          <EventCalendar />
        </div>
      </div>
    </div>
  );
}

export default ChartsPage;
