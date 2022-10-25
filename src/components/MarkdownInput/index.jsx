import { useState, useEffect} from 'react';

const MarkdownInput = ({handleMarkdownInput, existingNote, loading, setLoading}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState(null);
  const [currentNote, setCurrentNote] = useState({'value':''});
  // const [loading, setLoading] = useState(true);
  console.count();

  useEffect(() => {
    setTitle(currentNote.value.split('++')[0]);
    setText(currentNote.value.split('++')[1]);
    setLoading(false);
  }, [currentNote])

  const handleChangeText = (e) => {
    setText(e.target.value);
    setError(null);
    handleMarkdownInput([title, e.target.value]);
    e.preventDefault();
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    setError(null);
    handleMarkdownInput([e.target.value, text]);
    e.preventDefault();
  }

  const handleSubmit = (e) => {
    if(title === '') {
      setError("Title can't be blank");
    } else {
      setError(null);
      localStorage.setItem(`${localStorage.length}`, title + '++' + text);
      alert('You successfully created a note');
    }
    e.preventDefault();
  }
  
  if(existingNote !== null && loading){
    console.log(existingNote)
    console.log('enters existingNote different null');
    setCurrentNote(existingNote);
  }

  return <form onSubmit={handleSubmit} >
    <input type='text' onChange={handleChangeTitle} value={title} placeholder='Give a title to your note'></input><br></br>
    <textarea onChange={handleChangeText} value={text} placeholder='Type your note here'></textarea><br></br>
    <p>{error}</p>
    <input type="submit" value='Save'></input>
  </form>
}

export default MarkdownInput;