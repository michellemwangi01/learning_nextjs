import React from "react";

// Your're safer putting this metadata informaton about the title, description etc on the layout file because it is always gonna be a server component
export const metadata = {
  title: "About Us",
  description: "About us page generated by Next.js",
};

const page = () => {
  return <div>Welcome to about us!</div>;
};

export default page;
