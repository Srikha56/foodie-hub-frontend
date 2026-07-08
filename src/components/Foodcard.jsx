import { ShoppingCart,Heart } from 'lucide-react'
import React from 'react'
import { addToCart } from '../features/cartslice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { addFavorite ,removeFavorite } from '../features/favouriteslice'

const FoodCard = ({food}) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state)=>
  state.favourites.items || []
  );
  const isFavorite = favorites.some((item)=> item.id === food.id);

  const handleFavorite = () =>{
    if (isFavorite){
      dispatch(removeFavorite(food));
    }else
      dispatch(addFavorite(food))
  };

const handleAddToCart = () =>{
  dispatch(addToCart(food));
  toast.success(" Item Added to the Cart",
  {
    position:"top-right",
    autoClose:1200,
  });
};
  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden'>
        <img src={food.image}
         alt={food.name}
         className='h-48 w-full object-cover'/>
  
      <div className="p-4">
        <h2 className='font-bold text-lg'>{food.name}</h2>
        <p  className='text-green-600 font-semibold'>Rs{food.price}</p>
        <div className='flex justify-between mt-4'>
            <button className='p-2 bg-red-100 rounded-full'>
                <Heart
                onClick={handleFavorite}
                fill={isFavorite ? "red":"none"}
                color={isFavorite ? "red" :"gray"}
                
                />
            </button>
            <button onClick={handleAddToCart} className='bg-green-500 text-white px-4 py-2 rounded-lg flex gap-2'>
                <ShoppingCart size={18}/>
                Add
            </button>
        </div>
      </div>
      

      
    </div>
  )
};

export default FoodCard
