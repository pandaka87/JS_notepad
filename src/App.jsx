import { useState } from 'react'
import './App.css'
import MarkdownInput from './components/MarkdownInput'
import NoteDisplay from './components/NoteDisplay'
import Sidebar from './components/Sidebar'

function App() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const handleMarkdownInput = ([str1, str2]) => {
    setTitle(str1);
    setText(str2);
  }

  return (
    <div className="App">
      <NoteDisplay title={title} text={text}/>
      <MarkdownInput handleMarkdownInput={handleMarkdownInput}/>
      <Sidebar />
    </div>
  )
}

export default App;
