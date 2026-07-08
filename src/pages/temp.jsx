import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await fetch("https://foodie-hub-backend-c0er.onrender.com/orders");
      const data = await res.json();

      console.log("ORDERS FROM DB:", data);

      setOrders(data);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching orders:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();

    // optional auto refresh (live update)
    const interval = setInterval(() => {
      fetchOrders();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          My Orders
        </h1>

        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length === 0 ? (
          <p>No orders found</p>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-4 mb-4 rounded-xl shadow"
            >
              <h2 className="font-bold">
                Order ID: {order.id}
              </h2>

              <p>Status: {order.status}</p>

              <div className="mt-2">
                <h3 className="font-semibold">Items:</h3>

                {order.items?.map((item, index) => (
                  <div key={index} className="text-gray-600">
                    {item.name} x {item.qty}
                  </div>
                ))}
              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default Orders;
