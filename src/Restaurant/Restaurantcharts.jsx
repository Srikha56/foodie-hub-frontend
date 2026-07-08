import React, { useEffect, useMemo, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useOrders } from "../pages/OrdersContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const Restaurantcharts = () => {
  const {orders, setOrders}= useOrders();

  
 

 useEffect(() => {
  fetch("https://foodie-hub-backend-c0er.onrender.com/orders")
    .then(res => res.json())
    .then(data => setOrders(data));
}, []);

  // ✅ chart data (CORRECT PLACE)
  const chartData = useMemo(() => {
    return {
      labels: orders.map((o) => o.item),
      datasets: [
        {
          label: "Orders",
          data: orders.map((o) => o.qty),
        },
      ],
    };
  }, [orders]);

  // stats
  const pending = orders.filter(
  (o) => o.status?.toLowerCase() === "pending"
).length;

const accepted = orders.filter(
  (o) => o.status?.toLowerCase() === "accepted"
).length;

const rejected = orders.filter(
  (o) => o.status?.toLowerCase() === "rejected"
).length;

const revenue = orders
  .filter((o) => o.status?.toLowerCase() === "accepted")
  .reduce((sum, o) => {
    const total =
      o.items?.reduce((s, i) => s + i.price * i.qty, 0) || 0;
    return sum + total;
  }, 0);

  // pie
  const pieData = {
    labels: ["Pending", "Accepted", "Rejected"],
    datasets: [
      {
        data: [pending, accepted, rejected],
        backgroundColor: ["#facc15", "#22c55e", "#ef4444"],
      },
    ],
  };

  // bar
  const barData = {
    labels: ["Pending", "Accepted", "Rejected"],
    datasets: [
      {
        label: "Orders",
        data: [pending, accepted, rejected],
        backgroundColor: "#3b82f6",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2>Total</h2>
          <p className="text-xl font-bold">{orders.length}</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded shadow">
          <h2>Pending</h2>
          <p className="text-xl font-bold">{pending}</p>
        </div>

        <div className="bg-green-100 p-4 rounded shadow">
          <h2>Accepted</h2>
          <p className="text-xl font-bold">{accepted}</p>
        </div>

        <div className="bg-red-100 p-4 rounded shadow">
          <h2>Revenue</h2>
          <p className="text-xl font-bold">{revenue}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <Pie data={pieData} key={`pie-${orders.length}`} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <Bar data={barData}  key={`bar-${orders.length}`}/>
        </div>
      </div>
    </div>
  );
};

export default Restaurantcharts;
