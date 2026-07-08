import React from 'react'

const Section = () => {
  return (
    <section className='flex items-center justify-between px-12 py-16 bg-white gap-16'>
    <div className='flex-1 space-y-4'>
     <h1 className='text-5xl font-extrabold leading-tight'>
        <span className='text-black'>Delicious Food <br/>
        </span>
        <span className='text-orange-500'>Delivered <span className='text-black'>to you</span></span>
        

     </h1>
     <p className='text-gray-800 text-lg max-w-md'>
   Order from the best  Restaurants near you or become a partner with us
     </p>
     <button onClick={() => document.getElementById("sess").scrollIntoView({behavior:"smooth"})}
     className='bg-orange-570 text-black px-6 py-3 rounded-full hover:bg-orange-600'>Scroll down</button>

    </div>

    <div className='flex-1 flex justify-end'>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRucsrT4Jh73B2qI1r_AjPA0IK7qiliiPvG4w&s"
      alt='food'
      className='w-[420px] object-contain'/>
    </div>







    </section>
  )
}

export default Section
