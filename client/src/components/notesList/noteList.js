import React from 'react'
import { Button, Container,Row, Col } from 'react-bootstrap';
import { Badge, Text } from '@chakra-ui/react'
import {useSelector, useDispatch} from "react-redux"

function NoteList() {
    const notes=useSelector(state=>state.note.items)
    console.log(notes)
  return (
    <Container>
      <Row>
        {
          notes.map(item=>(
            <Col md={{ span:2, offset: 2 }} style={{minHeight:"100%", backgroundColor:"yellow", marginTop:"5%"}} key={item.id}  >
              <Badge className='float-start mt-2' style={{fontSize:"2%"}} >{item.title}</Badge><span><Button variant="light" className='btn-sm float-end' >x</Button></span> <br></br>
              <Text>{item.description}</Text>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default NoteList