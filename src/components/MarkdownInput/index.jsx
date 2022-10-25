import { useState } from 'react';

const MarkdownInput = ({handleMarkdownInput}) => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setSearch(e.target.value);
    setError(null)
    handleMarkdownInput(e.target.value);
    e.preventDefault();
  }

  const handleSubmit = (e) => {
    if(search === ''){
      setError('La note est vide')
    }else{
      setError(null)
      localStorage.setItem(`${localStorage.length}`, search);
    }
    e.preventDefault();
    // console.log(localStorage.getItem(`${localStorage.length - 1}`))
  }

  return <form onSubmit={handleSubmit} >
    <input type='textarea' onChange={handleChange} value={search}></input><br></br>
    <p>{error}</p>
    <input type="submit"  value='Save'></input>
  </form>
}

export default MarkdownInput;