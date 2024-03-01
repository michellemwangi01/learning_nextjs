import React from "react";
import Link from "next/link";

const page = () => {
  const productId = 100;
  return (
    <div>
      <h1>This is the main products page</h1>
      <h2>Product List</h2>
      <h3>
        <Link href="products/1">product 1</Link>
      </h3>
      <h3>
        <Link href="products/2">product 2</Link>
      </h3>
      <h3>
        <Link href="products/3">product 3</Link>
      </h3>
      <h3>
        <Link href={`products/${productId}`}>product {productId}</Link>
      </h3>
    </div>
  );
};

export default page;
