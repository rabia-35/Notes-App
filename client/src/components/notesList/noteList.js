import {useEffect} from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import { Badge, Text} from '@chakra-ui/react'
import {useSelector, useDispatch} from "react-redux"
import { getNotes, deleteNote } from '../../api';

function NoteList() {
    const notes=useSelector(state=>state.notes.items)
  
    const dispatch=useDispatch();

    const handleClick= async (id)=>{
        await dispatch(deleteNote(id))
    }
    useEffect(()=>{
      dispatch(getNotes())
    }, [dispatch])

    console.log(notes)

    return (
      
          <Row>
                {
                  notes.map((item, i)=>{
                    if(i<notes.length && i>notes.length-4){
                      return (
                        <Col  key={item.id}  className="mt-5 me-5 pb-3 list" style={{ backgroundColor:`${item.bgColor}` }} >
                                  <Badge className='float-start mt-2' style={{fontSize:"2%"}} >{item.title}</Badge>
                                  <span><Button variant="light" className='btn-sm float-end' onClick={()=>handleClick(item.id)} >x</Button></span> <br></br>
                                  <Text>{item.description}</Text>
                                </Col>
                              )
                          }
                        })
                }
               
            </Row>
        
    )
}

export default NoteList