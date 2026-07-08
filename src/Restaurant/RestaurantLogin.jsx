import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const RestaurantLogin = () => {


const navigate =useNavigate();
const[name,setName] =useState("");
const[password,setPassword]=useState("");
const handlelogin = async (e) => {
  e.preventDefault();

  const res = await fetch("https://foodie-hub-backend-c0er.onrender.com/restaurants");
  const data = await res.json();

  const restaurant = data.find(
    (item) => item.name === name && item.password === password
  );

  if (restaurant) {
    localStorage.setItem("name", JSON.stringify(restaurant));
    toast.success("Login success");
    navigate("/restaurant/dashboard", { replace: true });
  } else {
    toast.error("Invalid restaurant name or password");
  }
};
 return (
    <div className='min-h-screen flex items-center justify-center bg-green-50'>
      <div className='bg-white  p-8 rounded-2xl shadow-lg w-full max-w-md'>
     <h2 className='text-3xl font-bold text-center text-green-500'>Restaurant Login</h2>
     <p className='text-center text-gray-500 mt-2 mb-6'>Welcome back</p>
     <form onSubmit={handlelogin} className='space-y-4'>

        <input type='text'
        name='name'
        placeholder='enter restaurant name'
        className='w-full border p-3 rounded-lg'
        value={name}
        onChange={(e)=>setName(e.target.value)}
          required/>

      <input type='password'
       name='password'
       className='w-full border p-3 rounded-lg'
       placeholder='password'
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
       required/>

       <button 
       type='submit'
       className='w-full bg-green-500 text-white py-3 rounded-lg'>Login</button>
      </form>
      <p className='text-center mt-4'>New user?</p>
      <Link to='/restaurantsignup'
      className="text-orange-500 ml-2">Signup</Link>
      
      
      








      </div>
      
    </div>
  )
}

export default RestaurantLogin
