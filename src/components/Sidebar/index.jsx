import Note from '../Note'

const Sidebar = () => {
  const notes = () => {
    let ary = [];
    for(let i = 0; i < localStorage.length; i ++){
      ary.push({'id' : i, 'value':localStorage.getItem(i)}) ;
    }
    return ary;
  }

  return <div>
    {notes().map((note) => 
      (<Note key={note.id} note={note} />)
      )}
  </div>
}

export default Sidebar;