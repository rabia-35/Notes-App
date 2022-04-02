import React from 'react'
import { Link, Text} from "@chakra-ui/react"
function Footer() {
  return (
   
        <div className="mx-3 mb-5">
            Developed by <strong>Rabia Ölker</strong>
            <Text>
                Github {">> "}
                <Link color='teal.500' href='https://github.com/rabia-35/Notes-App' target="_blank">
                    @rabia-35
                </Link>
            </Text>
        </div>
    )
} 

export default Footer