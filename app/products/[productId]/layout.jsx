import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <h3>Featured Products</h3>
    </>
  );
};

export default layout;
