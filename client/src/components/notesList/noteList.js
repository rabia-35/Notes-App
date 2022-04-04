import {useEffect} from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import { Badge, Text} from '@chakra-ui/react'
import {useSelector, useDispatch} from "react-redux"
import { getNotes, deleteNote } from '../../api';

function NoteList() {
    const notes=useSelector(state=>state.notes.items);
    const filtered=useSelector(state=> state.notes.filtered)
    const dispatch=useDispatch();

    const handleClick= async (id)=>{
        await dispatch(deleteNote(id))
    }
    useEffect(()=>{
      dispatch(getNotes())
    }, [dispatch])

 console.log(filtered)
 console.log(notes)

    return (
      
          <Row>
                { filtered.length===0 && (
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
                         )
                  
                 }
                 {
                   filtered.length !==0  && (
                          
                              <Col xs={4} key={filtered[filtered.length-1].id}  className="m-5 pb-3 list" style={{ backgroundColor:`${filtered[filtered.length-1].bgColor}` }} >
                                      <Badge className='float-start mt-2' style={{fontSize:"2%"}} >{filtered[filtered.length-1].title}</Badge>
                                      <span><Button variant="light" className='btn-sm float-end' onClick={()=>handleClick(filtered[filtered.length-1].id)} >x</Button></span> <br></br>
                                      <Text>{filtered[filtered.length-1].description}</Text>
                              </Col>
                           )
                 }
               
            </Row>
        
    )
}

export default NoteList