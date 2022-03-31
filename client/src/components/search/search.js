import React from 'react'
import { Input, Center } from "@chakra-ui/react"

function Search() {
  return (
    <Center className='mt-3' >
        <Input
            color='tomato'
            placeholder='search note'
            _placeholder={{ opacity: 0.4, color: 'inherit' }}
            size="lg" w="50%" 
        />
    </Center>
  )
}

export default Search