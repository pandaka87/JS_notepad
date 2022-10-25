const Note = ({note, handleClickOnExistingNote}) => {
  const [title, text] = note.value.split('++');
  // const titleContent = {__html: converter.makeHtml(title)};
  // const textContent = {__html: converter.makeHtml(text)};

  const handleClick = (e) => {
    e.preventDefault();
    handleClickOnExistingNote(note);
  }

  return <div>
    <a href ='' onClick={handleClick} id='title'>{title}</a><br/>
    <a href ='' onClick={handleClick} id='note'>{text}</a>
  </div>
}

export default Note;