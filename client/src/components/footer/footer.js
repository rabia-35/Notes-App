import React from 'react'
import { Link, Text} from "@chakra-ui/react"
function Footer() {
  return (
   
        <div className="fixed">
            Developed by <strong>Rabia Ölker</strong>
            <Text>
                Github {">> "}
                <Link color='teal.500' href='https://github.com/rabia-35/Notes-App' rel="noreferrer" target="_blank">
                    @rabia-35
                </Link>
            </Text>
        </div>
    )
} 

export default React.memo(Footer)