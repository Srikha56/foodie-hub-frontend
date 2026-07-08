import React from 'react'
import { LayoutDashboard,PlusCircle,UtensilsCrossed,ClipboardList } from 'lucide-react'
import{Link} from 'react-router-dom'

const Restaurantsidebar = () => {
  return (
    <div className='w-64 h-screen bg-white shadow-lg p-5'>
        <h1 className='text-2xl font-bold mb-10 text-orange-500'>
            Restaurant Panel
        </h1>
      <ul className='space-y-6'>
        <li>
            <Link to= "/restaurant/dashboard" className='flex items-center gap-3 hover:text-green-600'>
            <LayoutDashboard size={22}/>
            </Link>
        </li>

        <li>
            <Link to="/restaurant/add-food" className='flex items-center gap-3 hover:text-green-600'>
            <PlusCircle size={22}/>
            Add Food
            </Link>
        </li>

        <li>
            <Link to ="/restaurant/my-foods" className='flex items-center gap-3 hover:text-green-600'>
            <UtensilsCrossed size={22}/>
            My Foods
            
            </Link>
        </li>


        <li>
            <Link to ="/restaurant/orders" className='flex items-center gap-3 hover:text-green-600'>
            
            <ClipboardList size={22}/>
            Orders
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default Restaurantsidebar
