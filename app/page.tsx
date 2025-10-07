"use client";
import React from "react";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello next.js</h1>
      <p>we have come from far to be here</p>
      <h2>He can drive us home</h2>
      <Link href="/users">take me there</Link>
      <ProductCard />
      <style jsx>{`
        p,
        h1,
        h2 {
          color: #811;
          font-size: 5vw;
          back-groundcolor: #181;
        }
      `}</style>
    </main>
  );
}
