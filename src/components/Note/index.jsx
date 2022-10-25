const Note = ({note, handleClickOnExistingNote}) => {
  const [title, text] = note.value.split('++');

  const handleClick = (e) => {
    e.preventDefault();
    handleClickOnExistingNote(note);
  }

  return <div>
    <a href ='' onClick={handleClick}>{title}</a><br />
    <a href ='' onClick={handleClick}>{text}</a>
  </div>
}

export default Note;