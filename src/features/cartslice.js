import{ createSlice} from "@reduxjs/toolkit";

const initialState ={
    items:[],
    totalQuantity:0,
    totalPrice:0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
     addToCart:(state,action)=>{
        const item =action.payload;
        const existingItem =state.items.find(
            (i)  =>i.id ===item.id
        );
        if(existingItem){
            existingItem.qty +=1;
        }else{
            state.items.push({...item,qty:1});
        }
        state.totalQuantity +=1;
        state.totalPrice+= Number(item.price);
     },

     decreaseQty:(state,action)=>{
        const id = action.payload;
        const existingItem = state.items.find(
            (i)=>i.id === id);
            if(existingItem){
                existingItem.qty-=1;
                state.totalQuantity-=1;
                state.totalPrice-= Number(existingItem.price);
             
                if (existingItem.qty === 0){
                    state.items =state.items.filter((i)=>i.id!==id);
                }

            }
     },
       removeFromCart:(state,action)=>{
        const id = action.payload;
        const item = state.items.find((i)=>
        i.id ===id);
        if(item){
            state.totalQuantity -=item.qty;
            state.totalPrice-= Number(item.price) *item.qty;

        }
        state.items =state.items.filter((i)=>i.id!==id)
       },

       clearCart:(state)=>{
        state.items =[];
        state.totalQuantity=0;
        state.totalPrice=0;
       },
    
    

    },
});

export const {
    addToCart,
    removeFromCart,
    decreaseQty,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;