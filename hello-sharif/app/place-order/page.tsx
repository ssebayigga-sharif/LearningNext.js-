"use client";
import React from "react";
import { useRouter } from "next/navigation";
//programatic navigation
const makeOrder = () => {
  const router = useRouter();
  const orderNow = () => {
    console.log(`place your order`);
    router.push("/");
  };
  return (
    <div>
      <h1>Order product</h1>
      <button onClick={orderNow}>place order</button>
    </div>
  );
};

export default makeOrder;
