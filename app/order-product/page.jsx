"use client";
import React from "react";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Place an Order",
//   description: "Place an order on this page",
// };

const page = () => {
  const router = useRouter();
  const handlePlaceOrder = () => {
    console.log("Your order has been placed successfully");
    router.push("/");
  };
  return (
    <div>
      <h1>Place an order page</h1>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default page;
