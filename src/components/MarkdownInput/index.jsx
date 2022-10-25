import { useState } from 'react';

const MarkdownInput = ({handleMarkdownInput}) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
    handleMarkdownInput(e.target.value);
    e.preventDefault();
  }

  const handleSubmit = (e) => {
    console.log(e)
    localStorage.setItem(localStorage.length, search)
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit} >
    <input type='textarea' onChange={handleChange} value={search}></input><br></br>
    <input type="submit"  value='Save'></input>
  </form>
}

export default MarkdownInput;