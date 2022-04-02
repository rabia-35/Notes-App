
import { Input, Center } from "@chakra-ui/react"




function Search() {
 
  return (
    <Center className='mt-3 bg-white'  >
        <Input
            color='tomato'
            placeholder='search note'
            _placeholder={{ opacity: 0.4, color: 'inherit' }}
            size="lg" w="50%" 
            className='mb-3'
        />
    </Center>
  )
}

export default Search