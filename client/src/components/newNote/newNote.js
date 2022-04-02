import {useState} from 'react'
import { Popover, PopoverArrow, PopoverTrigger, Button, PopoverContent, PopoverCloseButton, PopoverHeader, PopoverBody  } from "@chakra-ui/react"
import { Form } from 'react-bootstrap';
import { addNote } from "../../api"
import {useDispatch } from "react-redux"
function NewNote() {
  const [title, setTitle]=useState("")
  const [description, setDescription]=useState("")
  const dispatch=useDispatch()

  const handleSubmit= async (e)=>{
    if(!title || !description) return;

    e.preventDefault();
    await dispatch(addNote({ title, description }))
    setTitle("");
    setDescription("");
   }

  return (
    <div className='float-end m-5' >
     <Popover >
        <PopoverTrigger>
          <Button bg="blue.400">New Note</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader className='me-4'>
              <div className="input-group">
                <span className="input-group-text">Title</span>
                <input value={title} onChange={(e)=>setTitle(e.target.value)}type="text" className="form-control" />
              </div>
          </PopoverHeader>
          
          <PopoverBody>
              <div className="input-group">
                <span className="input-group-text">With textarea</span>
                <textarea  value={description} onChange={(e)=>setDescription(e.target.value)}  className="form-control" ></textarea>
              </div>
          </PopoverBody>
          <>
          <span className='ms-3'>
            <Form.Label htmlFor="exampleColorInput"  />
            <Form.Control
              type="color"
              id="exampleColorInput"
              defaultValue="#563d7c"
              title="Choose your color"
            />
          </span>
          <span><Button onClick={handleSubmit} className='bg-warning float-end m-2'>Add Note</Button> </span> 
          </>
        </PopoverContent>
         
      </Popover>
     
    </div>
  )
}

export default NewNote