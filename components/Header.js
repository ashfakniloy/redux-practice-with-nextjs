import { useSelector } from "react-redux";

function Header() {
  const { count } = useSelector((state) => state.counter);

  return (
    <div className="bg-slate-400">
      <div className="flex justify-between items-center px-64 py-4">
        <h1 className="text-3xl">Header</h1>
        <p className="text-xl">Count {count}</p>
      </div>
    </div>
  );
}

export default Header;
