"use client";
import { useState } from "react";

// Charts using RECHARTS https://recharts.org/en-US/

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
} from "recharts";

const pizzas = [
  { Name: "Mozarella", Price: 25, quantity: 50 },
  { Name: "Mushroom", Price: 40, quantity: 25 },
  { Name: "Chicken Tikka", Price: 15, quantity: 32 },
  { Name: "Periperi", Price: 30, quantity: 10 },
  { Name: "Vegetable", Price: 20, quantity: 34 },
];

const page = () => {
  const [data, setData] = useState(pizzas);

  return (
    <div>
      <h1 className="">PIZZAS DASHBOARD</h1>

      <h2> Bar chart</h2>
      <ResponsiveContainer width={"80%"} height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
          <XAxis dataKey="Name"></XAxis>
          <YAxis dataKey="Price"></YAxis>
          <Tooltip />
          <Legend />
          <Bar barSize={30} dataKey="Price" fill="#ca888a"></Bar>
          <Bar barSize={30} dataKey="quantity" fill="#ca988b"></Bar>
        </BarChart>
      </ResponsiveContainer>

      <h2> Line chart</h2>
      <ResponsiveContainer width={"80%"} height={300}>
        <LineChart data={data} margin={20}>
          <CartesianGrid
            horizontal={true}
            vertical={true}
            strokeDasharray={"3 3"}
          ></CartesianGrid>
          <XAxis dataKey="Name"></XAxis>
          <YAxis dataKey="quantity"></YAxis>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Price" stroke="#ca888a" />
          <Line type="linear" dataKey="quantity" stroke="#ca988b" />
        </LineChart>
      </ResponsiveContainer>

      <h2>Pie chart</h2>
      <ResponsiveContainer width="80%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="quantity"
            nameKey="Name"
            fill="#ca988b"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default page;
