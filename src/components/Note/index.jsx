const Note = ({note}) => {
  const [title, text] = note.value.split('++');
  
  return <div>
    <p>Title:{title}</p>
    <p>Content:{text}</p>
  </div>
}

export default Note;