import React from "react";

export const generateMetadata = ({ params }) => {
  // Nofte that the function name is specifically 'generateMetadata'.
  // This function allows us to have the title of the page changing depending on the product in view.
  return {
    title: `Product ${params.productId}`,
  };
};

const page = ({ params }) => {
  return (
    <div>
      <h1>Details about productID # {params.productId}</h1>
      <p>
        product details page for all products, like basically a template for
        each product item. Then we can receive all the relevant information
        through the params received into the component by the URL.
      </p>
    </div>
  );
};

export default page;
