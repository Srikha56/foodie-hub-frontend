import { Heart, Home, LogOut, ShoppingCart, User } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
const favorites = useSelector((state)=> state.favourites.items || [])
const navigate = useNavigate();
const handleLogout = ()=>{
  localStorage.removeItem("customer");
  navigate("/customerlogin",
    {replace:true}
  )
}

  return (
    <div className='w-64 h-screen bg-white shadow-lg p-5'>
        <h1 className='text-2xl font-bold mb-10'>
           <span className='text-black-500'> Foodie</span> <span className='text-orange-500'>hub</span>
        </h1>
      <ul className='space-y-6'>
        <li className='flex items-center gap-3 cursor-pointer hover:text-green-500'>
            <Home size={22}/>
            <span>Home</span>
        </li>
        <li className='flex items-center gap-3 cursor-pointer hover:text-red-500'
        onClick={()=>navigate("/favorites")}
        >
            <Heart size={22}/>
            <span>({favorites.length})Favourite</span>

        </li>

        <li className='flex items-center gap-3 cursor-pointer hover:text-orange-500'
        onClick={()=>navigate("/orders")}
        >
            <ShoppingCart size={22}/>
            <span>Orders</span>
        </li>
        <li  className='flex items-center gap-3 cursor-pointer hover:text-blue-500'>
            <User size={22}/>
            <span>Profile</span>
        </li>
        <li className='flex items-center gap- cursor-pointer hover:text-red-600
        'onClick={handleLogout}>
            <LogOut size={22}/>
                <span>Logout</span>
            
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
