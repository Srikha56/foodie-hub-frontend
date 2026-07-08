import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'

const CustomerSignup = () => {

    const navigate =useNavigate();
    const[formData,setFormData] =
    useState({
        name:"",
        email:"",
        password:"",
    });
  
    const handleChange =(e) =>{
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value,
                
            });
    
    };

    const handleSignup = async (e) =>{

        e.preventDefault();
        const checkUser =await fetch(`https://foodie-hub-backend-c0er.onrender.com/customers?email=${formData.email}`);
           
            

    const existingUser =await checkUser.json();
   
console.log(existingUser);
        
    if(existingUser.length > 0){
        toast.error("Email already exists ");
        return;

    }
         const response = await fetch("https://foodie-hub-backend-c0er.onrender.com/customers",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(formData),
         });
          
         if(response.ok){
         toast.success("Signup success");
        
         }
    };












  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
        <div className='w-full max-w-md bg-white shadow-2xl rounded-2xl shadow-lg  p-8'>
            <h2 className='text-2xl font-bold  text-orange-500 text-center'>Customer Signup</h2>
            <p className='text-sm text-gray-500 mt-2 mb-6 '>Create ur account</p>
            <form onSubmit={handleSignup}  className='space-y-4'>
                
                <input 
                type='text'
                name="name"
                placeholder='fullname'
                className='w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400'
                onChange={handleChange}
                required/>
                
                <input type='email'
                  name='email'
                  placeholder='Email'
                  className='w-full px-4 py-3 border rounded-xl focus:outline-none
                  focus:ring-2 focus:ring-orange-400 '
                  onChange={handleChange} required/>

                  <input type='password'
                  name='password'
                  placeholder='password'
                  className='w-full border px-4 py-3  rounded-xl focus:outline-none
                  focus:ring-2 focus:ring-orange-400'
                  onChange={handleChange}
                  required/>

                  <button 
                  type='submit'
                  className='w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold
                  transition duration-300'>
                    Signup
                  </button>

            </form>
               <p className='mt-2'>Already have an account ?
               <Link  to='/customerlogin' className='text-orange-500 ml-2'>Login</Link>
              </p>
        </div>
      
    </div>
  )
}

export default CustomerSignup
