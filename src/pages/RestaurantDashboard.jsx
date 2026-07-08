import React, { useEffect, useState } from 'react'
import Restaurantsidebar from '../Components/Restaurantsidebar'
import Restaurantcharts from '../Restaurant/Restaurantcharts'
const RestaurantDashboard = () => {

   



  return (
    <div className='flex'>
        <Restaurantsidebar/>
       <div className='flex-1 p-6 bg-gray-100 min-h-screen'>
       <h1 className='text-3xl font-bold mb-6'>
        Restaurant Dashboard
       </h1>
    <div className='grid grid-cols-3 gap-5'>
        <div className='bg-white p-5 rounded-xl shadow'>
            <h2 className='text-gray-500'>Total Orders</h2>
            <p className='text-3xl font-bold mt-2'>0</p>
        </div>
   
    <div className='bg-white p-5 rounded-xl shadow'>
   <h2 className='text-gray-500'>Revenue</h2>
   <p className='text-3xl font-bold mt-2'>0</p>


    </div>
       



    </div>


    <div className='mt-6'>
      <Restaurantcharts />
    </div>
       </div>
    </div>
  )
}

export default RestaurantDashboard
