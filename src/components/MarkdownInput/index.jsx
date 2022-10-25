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
    // console.log(localStorage.getItem(`${localStorage.length - 1}`))
  }

  return <form onSubmit={handleSubmit} >
    <input type='text' onChange={handleChangeTitle} value={title} placeholder='Add a title'></input><br></br>
    <input type='textarea' onChange={handleChangeText} value={text} placeholder='Add your note here'></input><br></br>
    <p>{error}</p>
    <input type="submit" value='Save'></input>
  </form>
}

export default MarkdownInput;