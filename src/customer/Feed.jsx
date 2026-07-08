import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import React, { useEffect, useState } from 'react'
import FoodCard from '../Components/Foodcard'
import { Key } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



const Feed = () => {
  
const[foods,setFoods]= useState([])
useEffect(()=>{
fetch("https://foodie-hub-backend-c0er.onrender.com/foods")
.then((res)=>res.json())
.then((data)=>setFoods(data))
.catch((err)=>console.log(err))

},[])

const totalQuantity =useSelector((state)=> state.cart.totalQuantity)
const navigate =useNavigate()
 const [searchTerm, setSearchTerm] = useState("");

const filteredFoods =foods
     .filter((food)=>food.available)
     .filter((food)=>
    food.name
     .toLowerCase()
     .includes(searchTerm.toLowerCase())
    
    )


  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar/>
     <div className='flex-1'>
      <Header searchTerm ={searchTerm}
       setSearchTerm ={setSearchTerm}
      />
      
       
      

        <h2 className='text-2xl font-bold mt-8 mb-4'>Popular Foods</h2>
        <div className='grid grid-cols-3 gap-5'>
    
      
      {filteredFoods.length > 0 ? (
    filteredFoods.map((food) => (
      <FoodCard key={food.id} food={food} />
    ))
  ) : (
    <div className="col-span-3 text-center py-10">
      <h2 className="text-2xl font-bold text-gray-500">
        !! No foods found
      </h2>
      <p className="text-gray-400 mt-2">
        Try searching for another food item
      </p>
    </div>
  )}
           
        </div>
       
        <div className='fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] bg-green-600 text-white px-6 py-4 rounded-2xl shadow-lg
   flex justify-between items-center'>
    <span>{totalQuantity}Item Added</span>
   <button onClick={()=> navigate("/cart")}>view Cart</button>
   </div>


      </div>
     </div>
    
  
    
  )
}

export default Feed
