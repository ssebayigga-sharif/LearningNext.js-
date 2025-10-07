"use client";
import React, { useState } from "react";

const Add = () => {
  const [name, setName] = useState(22);
  const heIsCalled = () => {
    setName(23);
  };
  return (
    //styling with tailwind
    <>
      <h1 className="  font-extrabold hover:bg-amber-300 from-pink-400 bg-fuchsia-800 text-9xl p-4">
        Uganda
      </h1>
      <p>I am {name} years old</p>
      <button onClick={heIsCalled} className=" btn btn-primary">
        His Name
      </button>
    </>
  );
};

export default Add;
