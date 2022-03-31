import './App.css';
import NoteList from './components/notesList/noteList'
import NewNote from './components/newNote/newNote';
import Search from './components/search/search'
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider >
      <Search />
      <NoteList />
      <NewNote />
    </ChakraProvider>
  );
}

export default App;
