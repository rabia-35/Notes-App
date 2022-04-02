import { createSlice } from "@reduxjs/toolkit";
import { getNotes, addNote, deleteNote } from "../../api";
 export const notesSlice =createSlice({
     name:"notes",
     initialState:{
         items:[],
         themeColor:"yellow",
     },
     reducers:{},
     extraReducers:{
         [getNotes.fulfilled]:(state, action)=>{
             state.items=action.payload;
         },
         [getNotes.rejected]:(state, action)=>{
            state.error=action.error.message
            console.log(action.error.message)
        },
        [addNote.fulfilled]:(state, action)=>{
            state.items.push(action.payload)
        },
        [deleteNote.fulfilled]:(state, action)=>{
        const id= action.payload;
        const index=state.items.findIndex(item=> item.id===id)
            state.items.splice(index, 1)
        }
     }
 })
 export default notesSlice.reducer;