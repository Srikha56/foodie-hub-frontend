import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const CustomerLogin = () => {

const navigate =useNavigate();
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const handleLogin = async(e) =>{
    e.preventDefault();
    const res = await fetch(`https://foodie-hub-backend-c0er.onrender.com/customers?email=${email}`);


const data = await res.json();
if(data.length > 0 && data[0].password === password){
    localStorage.setItem(
        "customer",
        JSON.stringify(data[0])
    );
    toast.success("login success")
    navigate("/feed",{replace:true});
} else {
    toast.error("Invalid Email or password");

}
};




















  return (
    <div className='min-h-screen flex items-center justify-center bg-orange-50'>
        <div className='bg-white p-8 rounded-2xl shadow-lg w-full  max-w-md'>
            <h2 className='text-3xl font-bold text-center text-orange-500'>Customer Login</h2>
            <p className='text-center text-gray-500 mt-2 mb-6'>Welcome Back</p>
            <form onSubmit ={handleLogin} className='space-y-4'>
           <input 
           type='email'
           name='email'
           placeholder='email'
           className='w-full border p-3 rounded-lg'
           value={email}
           onChange={(e)=>
            setEmail(e.target.value)
           }required
           />
           <input 
           type='password'
           placeholder='password'
           className='w-full border p-3 rounded-lg'
           value={password}
           onChange={(e) => setPassword(e.target.value)}required/>

           <button 
           type='submit'
           className='w-full bg-orange-500 text-white py-3 rounded-lg'>Login</button>
</form>
  <p className='text-center mt-4'>New user ?
  <Link to='/customersignup'
  className="text-orange-500 ml-2">Signup</Link>

  </p>

        </div>
      
    </div>
  )
}

export default CustomerLogin
