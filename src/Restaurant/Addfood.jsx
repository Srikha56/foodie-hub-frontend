import React, { useCallback, useState } from 'react'
import { toast } from 'react-toastify';

const Addfood = () => {

const[food,setFood]= useState(
    {
        name:"",
        price:"",
        image:"",
        category:"",
    }
)

const [loading,setLoading] = useState(false);



const handleChange = useCallback((e)=>{
 setFood((prev) =>({
    ...prev,
    [e.target.name]:e.target.value,
 }));

},[]);


const handleSubmit = async(e) =>{

    e.preventDefault();


    if(
        !food.name.trim() ||
        !food.price ||
        !food.image.trim ()||
        !food.category.trim()
    ){
        toast.error("please fill all fields");
        return;
    }

    try{
        setLoading(true);
        const  response = await fetch("https://foodie-hub-backend-c0er.onrender.com/foods",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                ...food,
                id:crypto.randomUUID(),
                available:true,
            }),
        });

        if(!response.ok){
            throw new Error("Failed to add food")
        }
       toast.success("food added succesfully");
       setFood({
        name:"",
        price:"",
        image:"",
        category:"",
       }) 

    }catch(error) {
        console.error(error);
        toast.error("something went wrong,Try again!!");
    }
    finally{
        setLoading(false);
    }


}
return (
    <div className='p-6'>
        <h1 className='text-3xl font-bold mb-6'>Add Food</h1>
        <form 
        onSubmit={handleSubmit}
        className='bg-white p-6 rounded-xl shadow space-y-4'>
        
        <input 
        type='text'
        name='name'
        placeholder='Food Name'
        value={food.name}
        onChange={handleChange}
        className='w-full border p-3 rounded'/>


        <input 
        type='number'
        name='price'
        placeholder='price'
        value={food.price}
        onChange={handleChange}
        className='w-full border p-3 rounded'
      />

      <input 
      type='text'
      name='image'
      placeholder='image url'
      value={food.image}
      onChange={handleChange}
      className='w-full border p-3 rounded'
      />
      <input 
      type='text'
      name='category'
      placeholder='category'
      value={food.category}
       onChange={handleChange}
       className='w-full border p-3 rounded'
       />

       <button 
       type='submit'
       className='bg-green-600 text-white px-5 py-3 rounded'>
        Add  Food
       </button>



        </form>
      
    </div>
  )
}

export default Addfood
