import { useState } from 'react';

const MarkdownInput = ({handleMarkdownInput}) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
    handleMarkdownInput(e.target.value);
    e.preventDefault();
  }

  return <form >
    <input type='textarea' onChange={handleChange} value={search}></input>
  </form>
}

export default MarkdownInput;