import './App.css';
import NoteList from './components/notesList/noteList'
import NewNote from './components/newNote/newNote';
import Search from './components/search/search'
import Footer from './components/footer/footer';
import { ChakraProvider } from '@chakra-ui/react'
import {Container, Row, Col} from "react-bootstrap"
function App() {
  return (
    <Container  >
      <Row >
        <ChakraProvider >
           
           <Col xs={9}  className="app">  <NoteList />  </Col> 
           <Col xs={3}   className='bg-warning'> 
              <Row>
                <Search /> 
                <NewNote  /> 
                <Footer />
              </Row> 
           </Col> 
           
        </ChakraProvider>
       </Row>
    </Container>
   
  );
}

export default App;
