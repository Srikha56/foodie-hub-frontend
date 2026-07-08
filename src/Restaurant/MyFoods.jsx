import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MyFoods = () => {
  const [foods, setFoods] = useState([]);

  const fetchFoods = async () => {

 try {
      const res = await fetch(`https://foodie-hub-backend-c0er.onrender.com/foods`);
      const data = await res.json();
      setFoods(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load foods");
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);
   

  const handleToggle = async (food) => {
    try{
        const updatedFood ={
            ...food,
            available:!food.available,
        };
        await 
        fetch(`https://foodie-hub-backend-c0er.onrender.com/foods/${food.id}`,{

            method:"PUT",
            headers :{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(updatedFood),
        });

        setFoods((prev) =>
        prev.map((item) =>
        
            item.id === food.id ?
            updatedFood:item
        
        )
        
        
        );
        toast.success("Food status updated");
    }catch (error){
        console.log(error);
        toast.error("Updated failed")
    }
  }



































const handleDelete = async (id) => {
  try {
    await fetch(`https://foodie-hub-backend-c0er.onrender.com/foods/${id}`,  {
      method: "DELETE",
    });

    setFoods((prev) =>
      prev.filter((food) => food.id !== id)
    );

    toast.success("Food deleted successfully");
  } catch (error) {
    console.log(error);
    toast.error("Delete failed");
  }
};
 
console.log(foods.map(food => food.id));


  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Foods</h1>

      <div className="grid grid-cols-3 gap-5">
        {foods.map((food) => (
          <div
            key={food.id}
            className="bg-white rounded-xl shadow overflow-hidden"
          >
            <img
              src={food.image}
              alt={food.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="font-bold text-lg">
                {food.name}
              </h2>

              <p className="text-green-600 font-semibold">
                ₹{food.price}
              </p>

              <p className="text-gray-500">
                {food.category}
              </p>
             
             <button
             onClick={()=> handleToggle(food)}
             className={`mt-3 px-4 py-2 rounded-lg text-white ${
                food.available
                ? "bg-green-500 hover:bg-green-600"
                :"bg-red-500 hover:bg-red-600"
             
             }`}
             >{food.available ? "🟢 Available" : "🔴 Not Available"}
                
                
                </button>


             


              <button
                onClick={() => handleDelete(food.id)}
                className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Delete Food
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

};
export default MyFoods
