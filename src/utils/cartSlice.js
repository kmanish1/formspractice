import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:["pizza","burgirrr"]
    },
    reducers:{
        additem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeitem:(state)=>{
            state.items.pop();
        },
        clearcart:(state)=>{
            state.items.length=0;
        }
    }
})

export default cartSlice.reducer;
export const{additem,removeitem,clearcart}= cartSlice.actions;