import { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import getStore, { wrapper } from "../app/store";
import { increment } from "../features/demo/counterSlice";
import { addUser, getUsers } from "../features/demo/usersSlice";
import Header from "../components/Header";

export default function Home() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);
  const users = useSelector((state) => state.users.users);

  const handleIncrement = () => {
    dispatch(increment());
  };

  // useEffect(() => {
  //   dispatch(getUsers());
  // }, [dispatch, getUsers]);

  // console.log(users);

  return (
    <div className="">
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

      <div className="my-10">
        <h1 className="text-lg">Server side data fetching</h1>
        <h1 className="mt-3 text-2xl">Users:</h1>
        {users.map((user, i) => (
          <p key={i}>{user.name}</p>
        ))}
      </div>

      <p className="mt-4">
        <Link href="/page2">Go to page2</Link>
      </p>
    </div>
  );
}

export async function getServerSideProps() {
  const store = getStore();
  await store.dispatch(getUsers());
  return {
    props: {
      initialState: store.getState(),
    },
  };
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     const response = await fetch(
//       `https://reqres.in/api/users/${Math.floor(Math.random() * 10 + 1)}`
//     );
//     const data = await response.json();
//     store.dispatch(addUser(`${data.first_name} ${data.last_name}`));
//     store.dispatch(increment());
//   }
// );