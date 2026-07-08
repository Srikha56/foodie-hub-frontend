import React from 'react'
import{FaUserCircle,FaStore} from "react-icons/fa"
import { Link } from 'react-router-dom'


const Sectiontwo = () => {
  return (
    <section id ="sess" className='bg-gray-50 py-20'>
     <div className='max-w-6xl mx-auto text-center'>
    <h2 className='text-4xl font-bold text-gray-800'>
        Join<span className='text-orange-500'>Foodie Hub</span>
        Today
    </h2>
      <p className='text-gray-500 mt-3 mb-12'>
        whether you're hungry or runing  a restaurant, we've got u covered 
      </p>
        <div className='grid md:grid-cols-2 gap-8'>
       <div className='bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition'>

      <FaUserCircle className="text-6xl text-orange-500 mx-auto mb-5"/>
      <h3 className='text-2xl font-bold text-gray-800 mb-3'>
        Customer
      </h3>
      <p className='text-gray-700 mb-6'>Discover amazing restaurants order ur favorite meals,and enjy fast delivery at ur doorstep</p>
        
        <div className='flex justify-center gap-4'>
           
            <Link to='/customerlogin'>
            <button
            className='bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600  transition'> Login</button>
            </Link>
            
            <Link to='/customersignup'>
             <button
            className='bg-orange-500 text-white px-6 py-2  rounded-full  hover:bg-orange-600  transition'>Signup</button>
            </Link>
        </div>

       </div>
               {/*Restaurant ownwer*/}

               <div className='bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition'>
                <FaStore className="text-6xl text-green-600 mx-auto mb-5"/>
               <h3 className='text-2xl font-bold text-gray-800 mb-3'>
                Restaurant owner
               </h3>
               <p className='text-gray-800 mb-6'>Partners with FoodieHub,reach more customers,manage orders efficiently and grow ur business</p>
               <div className='flex justify-center gap-4'>
                  <Link to ='/restaurantlogin'>
                <button className='bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition'>Login</button>
                </Link>
                <Link to='/restaurantsignup'>
                <button className='bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition'>Signup</button>
                 </Link>
               </div>
               </div>

               </div>
      


     </div>

      
    



    </section>
      

  )
}

export default Sectiontwo
