import { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../app/store";
import { increment } from "../features/demo/counterSlice";
import { getUsers } from "../features/demo/usersSlice";
import Header from "../components/Header";
import { addPerson } from "../features/demo2/personsSlice";

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

  return (
    <div className="bg-red-50">
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
        <h1 className="text-2xl font-bold">Server side data fetching</h1>
        <h1 className="mt-3 text-2xl">Users:</h1>
        {users && users.map((user, i) => <p key={i}>{user.name}</p>)}
      </div>

      <div className="mt-4 flex gap-5">
        <Link href="/page2">Go to other page</Link>
        <Link href="/table">Go to table page</Link>
        <Link href="/charts">Go to charts page</Link>
      </div>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(getUsers());
  }
);
