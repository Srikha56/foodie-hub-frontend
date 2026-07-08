import React, { useState } from 'react'
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom'

const RestaurantSignup = () => {
const [formData,setFormData]=useState(
    {
     name:"",
     owner:"",
     number:"",
     address:"",
     businesstype:"",
     password:"",
     confirmpassword:"" 


   });
   
   const handleChange=(e) =>{
    setFormData(
        {
            ...formData,
            [e.target.name]:e.target.value,
        }
    )
   }


   const handleresignup =async (e)=>{
    e.preventDefault();
       const checkUser =await fetch(`https://foodie-hub-backend-c0er.onrender.com/restaurants?number=${formData.number}`);
       
        console.log("DATA:",formData)


       
           const existingUser =await checkUser.json();
           if(existingUser.length > 0){
               toast.error("number already exists ");
               return;
      

           }
         

    if(formData.password!==formData.confirmpassword){
        toast.error("password not matched pls check")
         return;
    }
      
    
     const allRestaurantRes =await fetch("https://foodie-hub-backend-c0er.onrender.com/restaurants");
     const allRestaurant =await allRestaurantRes.json();

     const newId = Date.now();



    try{
        const response = await fetch("https://foodie-hub-backend-c0er.onrender.com/restaurants",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({
                id:Date.now(),
                name:formData.name,
                owner:formData.owner,
                number:formData.number,
                address:formData.address,
                businesstype:formData.businesstype,
                password:formData.password

            })
        })
        
        if(response.ok){
            toast.success("Registration completed");
        }

        setFormData({
            name:"",
            owner:"",
            number:"",
            address:"",
            businesstype:"",
            password:"",
            confirmpassword:""
        })

    } catch(error){
        console.log(error)
        toast.error("Something went wrong")
    }

   }














  return (
    <div className='min-h-screen flex items-center justify-center bg-green-50'>
        <div className='bg-white  p-8 rounded-2xl shadow-lg w-full max-w-md'>
       <h2 className='text-3xl font-bold text-center text-green-500'>Restaurnt Signup </h2>
       <p className='text-center text-gray-800  mt-2 mb-6'>To sell foods on online please register</p>
       <form onSubmit={handleresignup} className='space-y-4'>
       
       <input type='text'
       name='name'
       placeholder='enter ur resturant name'
       className='w-full border p-3 rounded-lg'
       value={formData.name} 
      onChange={handleChange}
      required
      />
      <input type='text'
      name='owner'
      placeholder='owner name'
      className='w-full border p-3 rounded-lg'
      value={ formData.owner}
      onChange={handleChange}
      required/>

      <input type='number'
      name='number'
      placeholder='phone number'
      value={ formData.number}
      className='w-full border  p-3 rounded-lg'
      onChange={handleChange}
      required/>

      <input type='text'
      name='address'
      placeholder='address'
      className='w-full border p-3 rounded-lg'
      value={formData.address}
      onChange={handleChange}
      required/>

      <select
      name='businesstype'
      value={formData.businesstype}
      placeholder='choose ur business type'
      
  
      onChange={handleChange

      }>
        <option value="">Select Business type </option>
      <option value="Restaurant">Restaurant</option>
       <option value="Cloudkitchen">Cloud kitchen</option>    
       </select>  
       <input type='password'
       name='password'
       value={formData.password}
       placeholder='enter ur password'
       onChange={handleChange}
       className='w-full border p-3 rounded-lg'/>

       <input type='password'
       name='confirmpassword'
       placeholder='confirm  ur password'
       value={formData.confirmpassword}
       onChange={handleChange}
       className='w-full border p-3 rounded-lg'/>

       <button 
       type='submit'
       className='w-full bg-green-500
       text-white p-3 rounded-lg'>Signup</button>



       </form>
        <p className='mt-2'>Already have an account ?
             <Link  to='/restaurantlogin' className='text-orange-500 ml-2'>Login</Link>
              </p>



        </div>
      
    </div>
  )
}

export default RestaurantSignup
