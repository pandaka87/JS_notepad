import Showdown from 'showdown';
const converter = new Showdown.Converter();

const NoteDisplay = ({markdown}) => {
  const content = {__html: converter.makeHtml(markdown)};

  return <div dangerouslySetInnerHTML={content}></div>;
  
}

export default NoteDisplay;