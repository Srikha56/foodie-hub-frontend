import React from 'react'
import { useSelector } from 'react-redux'

const favourites = () => {

const favorites = useSelector(
  (state) => state.favourites.items
);






  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">
        ❤️ My Favorites
      </h2>

      {favorites.length === 0 ? (
        <p>No favorites added</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {favorites.map((food) => (
            <div key={food.id} className="bg-white p-3 shadow rounded">
              <img src={food.image} className="h-32 w-full object-cover" />
              <h3 className="font-bold">{food.name}</h3>
              <p>Rs {food.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};



export default favourites
