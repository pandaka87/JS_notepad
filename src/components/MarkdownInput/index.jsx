import { useState } from 'react';

const MarkdownInput = ({handleMarkdownInput}) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null)

  const handleChangeText = (e) => {
    setText(e.target.value);
    setError(null)
    handleMarkdownInput([title, e.target.value]);
    e.preventDefault();
  }
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    setError(null)
    handleMarkdownInput([e.target.value, text]);
    e.preventDefault();
  }

  const handleSubmit = (e) => {
    if(title === ''){
      setError("Title can't be blank")
    }else{
      setError(null)
      localStorage.setItem(`${localStorage.length}`, title + '++' + text);
    }
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit} >
    <input type='text' onChange={handleChangeTitle} value={title} placeholder='Give a title to your note'></input><br></br>
    <textarea onChange={handleChangeText} value={text} rows="5" cols="33" placeholder='Type your note here'></textarea><br></br>
    <p>{error}</p>
    <input type="submit" value='Save'></input>
  </form>
}

export default MarkdownInput;