import { useState } from 'react'
import './App.css'
import MarkdownInput from './components/MarkdownInput'
import NoteDisplay from './components/NoteDisplay'

function App() {
  const [input, setInput] = useState('')

  const handleMarkdownInput = (str) => {
    setInput(str);
  }

  return (
    <div className="App">
      <NoteDisplay markdown={input}/>
      <MarkdownInput handleMarkdownInput={handleMarkdownInput}/>
      
    </div>
  )
}

export default App;
