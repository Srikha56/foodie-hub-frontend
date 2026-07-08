import { Bell ,User } from 'lucide-react'
import React from 'react'

const Header = (
  {
    searchTerm,setSearchTerm
  }
) => {
  return (
   <div className='bg-white p-4 shado flex justify-between items-center'>
    <input 
    type='text'
    placeholder='search'
   value={searchTerm}
   onChange={(e)=> setSearchTerm(e.target.value)}

    className='border p-2 rounded-lg w-96'/>
    <div className='flex gp-5'>
      <Bell/>
      <User/>

    </div>
   </div>
  )
}

export default Header
