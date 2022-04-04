import {useEffect} from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import { Badge, Text} from '@chakra-ui/react'
import {useSelector, useDispatch} from "react-redux"
import { getNotes, deleteNote } from '../../api';

let lastNotes=[];
function NoteList() {
    const notes=useSelector(state=>state.notes.items);
    const filtered=useSelector(state=> state.notes.filtered);
    const all= useSelector(state=> state.notes.all)
    const dispatch=useDispatch();

    useEffect( ()=>{
      dispatch(getNotes())
    }, [dispatch])
    
    const handleClick= async (id)=>{
        await dispatch(deleteNote(id))
    }
  
    lastNotes=notes
    if(lastNotes.length>3){
     lastNotes= lastNotes.slice(-3)
    }
    console.log("last ", lastNotes)
 
 console.log(notes)

    return (
      
          <Row>
                { filtered.length===0 && all===false && (
                   lastNotes.map(item=>{
                    return (
                      <Col xs={3} key={item.id}  className="mt-5 me-5 pb-3 list" style={{ backgroundColor:`${item.bgColor}` }} >
                    <Badge className='float-start mt-2' style={{fontSize:"2%"}} >{item.title}</Badge>
                    <span><Button variant="light" className='btn-sm float-end' onClick={()=>handleClick(item.id)} >x</Button></span> <br></br>
                    <Text>{item.description}</Text>
                  </Col>
                    )
                   })
                )
                   
                 }
                 {
                   filtered.length !==0  && (
                          
                              <Col xs={5} key={filtered[filtered.length-1].id}  className="m-5 pb-3 list" style={{ backgroundColor:`${filtered[filtered.length-1].bgColor}` }} >
                                      <Badge className='float-start mt-2' style={{fontSize:"2%"}} >{filtered[filtered.length-1].title}</Badge>
                                      <span><Button variant="light" className='btn-sm float-end' onClick={()=>handleClick(filtered[filtered.length-1].id)} >x</Button></span> <br></br>
                                      <Text>{filtered[filtered.length-1].description}</Text>
                              </Col>
                           )
                 }
                 {
                   all===true && filtered.length===0 && (
                    notes.map(item=>{
                      return (
                        <Col xs={3} key={item.id}  className="mt-5 me-5 mb-3 pb-3 list" style={{ backgroundColor:`${item.bgColor}` }} >
                      <Badge className='float-start mt-2' style={{fontSize:"2%"}} >{item.title}</Badge>
                      <span><Button variant="light" className='btn-sm float-end' onClick={()=>handleClick(item.id)} >x</Button></span> <br></br>
                      <Text>{item.description}</Text>
                    </Col>
                      )
                     }) 
                   )
                 }
               
            </Row>
        
    )
}

export default NoteList