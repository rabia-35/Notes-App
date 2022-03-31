import { createSlice } from "@reduxjs/toolkit";
 export const notesSlice =createSlice({
     name:"note",
     initialState:{
         items:[
             { id:1, title:"english word", description:"Some quick example text to build on the card title and make up the bulk of the card's content."},
             { id:2, title:"software keyword", description:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
             { id:3, title:"home spice", description:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
             
            ],
         themeColor:"white",
     }
 })
 export default notesSlice.reducer;