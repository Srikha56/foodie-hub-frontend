import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { addToCart, decreaseQty, removeFromCart } from '../features/cartslice'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cartslice'
import {toast} from 'react-toastify'
import  {addOrder} from '../features/orders'

const Cart = () => {

const dispatch =useDispatch();
const  cartItems = useSelector((state)=> state.cart.items);
const  totalPrice =useSelector((state)=> state.cart.totalPrice);
const [orderPlaced,setOrderPlaced] = useState(false);
const handleplacechange = async () => {
  if (cartItems.length === 0) return;

  try {
    await fetch("https://foodie-hub-backend-c0er.onrender.com/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: crypto.randomUUID(),
        items: cartItems,
        status: "pending"
      })
    });

    toast.success("Order placed successfully!");

    setOrderPlaced(true);

    setTimeout(() => {
      dispatch(clearCart());
    }, 2000);

  } catch (err) {
    toast.error("Order failed");
  }
};

  


  









  return (
    <div className="min-h-screen bg-gray-100 p-6">
  <div className="max-w-4xl mx-auto">

    <h1 className="text-3xl font-bold flex items-center gap-3 mb-6">
      <FaShoppingCart className="text-green-600" />
      My Cart
    </h1>

    {cartItems.length === 0 ? (
      <div className="bg-white rounded-xl p-10 text-center shadow">
        <FaShoppingCart
          size={60}
          className="mx-auto text-gray-300 mb-4"
        />
        <h2 className="text-xl font-semibold">
          Your Cart is Empty
        </h2>
        <p className="text-gray-500 mt-2">
          Add some delicious food 
        </p>
      </div>
    ) : (
      <>
        <div className="space-y-4">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 flex justify-between items-center"
            >
              {/* Left */}
              <div>
                <h2 className="text-lg font-bold">
                  {item.name}
                </h2>

                <p className="text-green-600 font-semibold">
                  ₹{item.price}
                </p>
              </div>

              {/* Right */}
              <div className="flex items-center gap-4">

                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  className="w-8 h-8 rounded-full bg-red-100 text-red-600 font-bold"
                >
                  -
                </button>

                <span className="font-bold text-lg">
                  {item.qty}
                </span>

                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold"
                >
                  +
                </button>

                <button
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
                  }
                  className="text-red-500 font-medium"
                >
                  Remove
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* Bill Section */}

        <div className="bg-white mt-6 p-6 rounded-xl shadow-md">

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Delivery Fee</span>
            <span>₹40</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>GST</span>
            <span>₹20</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>₹{totalPrice + 40 + 20}</span>
          </div>

          <button className="w-full mt-5 bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition"
           onClick={handleplacechange}
           disabled={orderPlaced}
           style={{
            opacity:orderPlaced ? 0.5:1,
            cursor :orderPlaced ? "not-allowed":"pointer"
           }}
           
          >
          
          {orderPlaced ? "Order Placed":"Place Order"}
          </button>
          
        </div>
      </>
    )}
  </div>
</div>
  )}
export default Cart
