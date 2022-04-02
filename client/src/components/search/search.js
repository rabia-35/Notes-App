
import { Input, Center } from "@chakra-ui/react"




function Search() {
 
  return (
    <Center className='mt-5 '  >
        <Input
            color='gray'
            placeholder='search note'
            _placeholder={{ opacity: 0.4, color: 'inherit' }}
            size="lg" 
            className='mb-3 bg-light'
        />
    </Center>
  )
}

export default Search