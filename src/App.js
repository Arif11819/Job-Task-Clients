import './App.css';
import AddNotes from './components/Notes/AddNotes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import NoteShow from './components/Notes/NoteShow';

function App() {
  return (
    <div className="App">
      <ToastContainer limit={1} />
      <AddNotes></AddNotes>
      <NoteShow></NoteShow>
    </div>
  );
}

export default App;
