import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const RestaurantOrders = () => {
const[orders,setOrders] = useState([]);
const fetchOrders = async () =>{
    try{
        const res = await fetch("https://foodie-hub-backend-c0er.onrender.com/orders");
        const data = await res.json();
        setOrders(data);
    }catch(error){
        toast.error("Failed to load orders");
    }
};
 useEffect(() =>{
    fetchOrders();
  const interval  = setInterval (
    fetchOrders,2000);

  return () => clearInterval(interval)

 },[]);

 const handleReject = async(order)=>{
    if (!order ?.id) return;
   await fetch (`https://foodie-hub-backend-c0er.onrender.com/orders/${order.id}`,{
    method:"PATCH",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify({
        status:"rejected",
    }),
   });
   fetchOrders();
 }

 const updateStatus = async (order,newStatus) => {
    try{
        const updatedOrder ={
            ...order,
            status :newStatus,
        };

        await fetch(`https://foodie-hub-backend-c0er.onrender.com/orders/${order.id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(updatedOrder),
        });
        setOrders((prev) =>
        prev.map((item) => 
            item.id === order.id ?
        updatedOrder:item
        
        )
        
        );
        toast.success(`Order ${newStatus}`);
    }catch(error){
        toast.error("Status updated fail")
    }
 };





  return (
    <div className='p-6'>
        <h1 className='text-3xl font-bold mb-6'>RestaurantOrders</h1>
        <div className='space-y-5'>
            {orders.map((order) => (
          <div
          key={order.id}
          className='bg-white p-5 rounded-xl shadow'>
         
         <h2 className='font-bold text-lg mb-2'>
            Order #{order.id}
         </h2>
       {order.items?.map((item) => (
  <p key={item.id}>
    {item.name} × {item.qty}
  </p>
))}

        <p className='mt-3 font-semibold'>
            Status:
            <span className='ml-2 text-blue-600'>
                {order.status}
            </span>
        </p>
        <div className='flex gap-3 mt-4'>
            <button 
            onClick={()=>
                updateStatus(order,"preparing")
            }
            className='bg-yellow-500 text-white px-4 py-2 rounded'>Accept</button>

           <button
           onClick={()=>
            updateStatus(order,"Delivered")
           }
           className='bg-green-600 text-white px-4 py-2 rounded'>Delivered</button>
           
     {order.status === "pending" && (
       <button
  onClick={() => updateStatus(order, "rejected")}
  className="bg-red-600 text-white px-4 py-2 rounded"
>
  Reject
</button>
      
    
     )}
     {order .status === "rejected" && (

        <p style={{
            color:"red",
            fontWeight:"bold"
        }}> Order Rejected </p>
     )}

        </div>

          </div>
            ))}
        </div>
      
    </div>
  )
}

export default RestaurantOrders
