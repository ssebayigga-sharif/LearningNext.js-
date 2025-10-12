import React from "react";

const aboutLayOut = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <h2>about us </h2>
    </div>
  );
};

export default aboutLayOut;
