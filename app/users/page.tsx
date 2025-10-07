import React from "react";
import Cart from "./Cart";
interface me {
  id: number;
  name: string;
}

const user = async () => {
  //fetching data using the fetch method
  const mine = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 }, //used when u want data to
    //  temporarily be stored and also only in  fetch function or method
  });
  const them: me[] = await mine.json();
  return (
    //styling with  tailwind
    <>
      <h1 className=" font-bold bg-amber-800 hover:bg-cyan-400 caret-neutral-950 text-5xl p-7">
        Users
      </h1>
      <ol>
        {them.map((me) => (
          <ul key={me.id}> {me.name}</ul>
        ))}
      </ol>
      <Cart />
    </>
  );
};

export default user;
