import React from 'react'
import { Popover, PopoverArrow, PopoverTrigger, Button, PopoverContent, PopoverCloseButton, PopoverHeader, PopoverBody  } from "@chakra-ui/react"
import { Form } from 'react-bootstrap';
function NewNote() {
  return (
    <div className='float-end m-5'>
     <Popover>
        <PopoverTrigger>
          <Button bg="blue.400">New Note</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Confirmation!</PopoverHeader>
          <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
          <>
            <Form.Label htmlFor="exampleColorInput" />
            <Form.Control
              type="color"
              id="exampleColorInput"
              defaultValue="#563d7c"
              title="Choose your color"
            />
          </>
        </PopoverContent>
         
      </Popover>
     
    </div>
  )
}

export default NewNote