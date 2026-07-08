import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items:[],
};

const favouriteSlice = createSlice({
name:"favourites",
initialState,
reducers:{
    addFavorite:(state,action)=>{
        state.items.push(action.payload);
    },
    removeFavorite:(state,action)=>{
        state.items =state.items.filter(
            (item)=> item.id !== action.payload
        );
    }
}

});

export const {
    addFavorite,removeFavorite
}=favouriteSlice.actions;
export default favouriteSlice.reducer;