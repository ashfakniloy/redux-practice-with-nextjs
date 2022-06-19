import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/demo/counterSlice";
import { getUsers } from "../features/demo/usersSlice";
import { addPerson } from "../features/demo2/personsSlice";
import Header from "../components/Header";

export default function Home() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);
  const users = useSelector((state) => state.users.users);
  const persons = useSelector((state) => state.persons.persons);

  const [name, setName] = useState("");

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name });
    dispatch(addPerson(name));
    setName("");
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  console.log(users);

  return (
    <div className="bg-blue-50">
      <Header />
      <h1>redux practice</h1>

      <div className="my-10">
        <h1 className="text-3xl">Counter: {counter}</h1>
        <button
          className="mt-2 mx-2 bg-slate-400 px-5 py-2 active:bg-slate-500"
          onClick={handleIncrement}
        >
          Increment
        </button>
      </div>

      <div className="mt-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-1 outline-none border border-slate-500 focus:border-slate-800"
        />
        <button
          type="submit"
          className="py-1 px-4 ml-1 bg-slate-400 active:bg-slate-500 border border-slate-400"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>

      <div className="mt-5">
        <h1 className="text-2xl">Added names:</h1>
        {persons.map((person, i) => (
          <p key={i}>{person}</p>
        ))}
      </div>

      <hr className="mt-10" />
      <div className="my-10">
        <h1 className="text-2xl font-bold">Client side data fetching</h1>
        <h1 className="mt-3 text-2xl">Users:</h1>
        {users && users.map((user, i) => <p key={i}>{user.name}</p>)}
      </div>

      <div className="mt-4">
        <Link href="/">Go to home</Link>
      </div>
    </div>
  );
}
