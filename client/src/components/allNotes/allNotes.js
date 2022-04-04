import React from 'react'
import {Button} from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import {allNotes} from "../../redux/notes/notesSlice"

function AllNotes() {
    const dispatch=useDispatch();
    const handleClick= async()=>{
        await dispatch(allNotes())
    }
  return (
    <div className='allBtn'>
        <Button onClick={handleClick}>
            All Notes
        </Button>
    </div>
  )
}

export default AllNotes