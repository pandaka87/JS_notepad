import { useState, useEffect} from 'react'
import './App.scss'
import MarkdownInput from './components/MarkdownInput'
import NoteDisplay from './components/NoteDisplay'
import Sidebar from './components/Sidebar'

function App() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [existingNote, setExistingNote] = useState(null)

  const handleMarkdownInput = ([str1, str2]) => {
    console.count()
    setTitle(str1);
    setText(str2);
    setExistingNote(null);
  }

  const handleClickOnExistingNote = (note) => {
    setExistingNote(note);
  }

  return (
    <>
    <Sidebar handleClickOnExistingNote={handleClickOnExistingNote}/>
    <div id='display-container'>
      <NoteDisplay title={title} text={text}/>
      <MarkdownInput existingNote={existingNote} handleMarkdownInput={handleMarkdownInput}/>
    </div>
    </>
  )
}

export default App;
