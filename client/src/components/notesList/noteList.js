import {useEffect} from 'react'
import { Button, Container,Row, Col } from 'react-bootstrap';
import { Badge, Text } from '@chakra-ui/react'
import {useSelector, useDispatch} from "react-redux"
import { getNotes, deleteNote } from '../../api';

function NoteList() {
    const notes=useSelector(state=>state.notes.items)
    console.log(notes)
    const dispatch=useDispatch();

    const handleClick= async (id)=>{
        await dispatch(deleteNote(id))
    }
    useEffect(()=>{
      dispatch(getNotes())
    }, [dispatch])

    let lastNotes=[]
    for(let i=notes.length-1; i>notes.length-4; i--){
      lastNotes.push(notes[i]);
    }
    console.log(lastNotes)
  return (
    <Container>
      <Row>
        {
          lastNotes.map(item=>(
            <Col md={{ span:3 }} key={item.id}  className="mt-5 me-1 list" >
              <Badge className='float-start mt-2' style={{fontSize:"2%"}} >{item.title}</Badge>
              <span><Button variant="light" className='btn-sm float-end' onClick={()=>handleClick(item.id)} >x</Button></span> <br></br>
              <Text>{item.description}</Text>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default NoteList