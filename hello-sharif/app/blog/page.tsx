import React from "react";

const blog = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intensional delay");
    }, 4000);
  });
  return <h1>my blog</h1>;
};

export default blog;
