import React from "react";
import Link from "next/link";
const productList = () => {
  return (
    <>
      <Link href={"/"}>home</Link> <h1>product list</h1>
      <h2>
        <Link href={"/product/1"}>product 1</Link>
      </h2>
      <h2>
        <Link href={"/product/2"}>product 2</Link>
      </h2>
      <h2>
        <Link href={"/product/3"}>product 3</Link>
      </h2>
    </>
  );
};

export default productList;
