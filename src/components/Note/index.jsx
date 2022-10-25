const Note = ({note, handleClickOnExistingNote}) => {
  const [title, text] = note.value.split('++');

  const handleClick = (e) => {
    e.preventDefault();
    handleClickOnExistingNote();
  }

  return <div>
    <a href ='' onClick={handleClick}>Title:{title}<br></br>Content:{text}</a>
  </div>
}

export default Note;