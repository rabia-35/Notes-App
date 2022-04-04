import { Input, Center } from "@chakra-ui/react"
import {useState} from "react"
import {useDispatch} from "react-redux"
import {filteredNote} from "../../redux/notes/notesSlice"

function Search() {
 const [title, setTitle]=useState("")
  
const dispatch=useDispatch();

 const handleSubmit=async (e)=>{
  e.preventDefault();
  if(!title) return;
 await dispatch(filteredNote(title))
  setTitle("")
 }
  return (
    <Center className='mt-5 '  >
      <form onSubmit={handleSubmit} >
        <Input
              color='gray'
              placeholder='search note'
              _placeholder={{ opacity: 0.4, color: 'inherit' }}
              size="lg" 
              className='mb-3 bg-light'
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
          />
      </form>
       
    </Center>
  )
}

export default Search