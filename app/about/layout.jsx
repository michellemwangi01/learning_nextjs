import React from "react";

const layout = ({ children }) => {
  // The children prop allows the page to receive the content on the page.jsx page and to include it in the specified layout
  return (
    <div>
      <p>About Us</p>
      <main>{children}</main>
    </div>
  );
};

export default layout;
