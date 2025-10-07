"use client";
import React from "react";
interface carol {
  id: number;
  name: string;
}

const AddToCart = async () => {
  //fetching data
  const sham = await fetch("https://jsonplaceholder.typicode.com/users");
  const jonah: carol[] = await sham.json();
  return (
    <div>
      <h1>members fetched</h1>
      <ol>
        {jonah.map((carol) => (
          <ul key={carol.id}>{carol.name}</ul>
        ))}
      </ol>
      <button
        onClick={() => {
          console.log("click");
        }}
        className=" btn btn-primary"
      >
        add to cart
      </button>
    </div>
  );
};

export default AddToCart;
