import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const getNotes= createAsyncThunk("notes/getNotes", async ()=>{
    const res=await axios("http://localhost:7000/notes");
    return res.data
})

export const addNote= createAsyncThunk("notes/addNote", async (note)=>{
    const res= await axios.post("http://localhost:7000/notes", note);
    return res.data
})

export const deleteNote= createAsyncThunk("notes/patchNote", async (id)=>{
    await axios.delete(`http://localhost:7000/notes/${id}`);
    return id
})