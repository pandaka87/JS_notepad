import Showdown from 'showdown';
const converter = new Showdown.Converter();

const NoteDisplay = ({title, text}) => {
  const titleContent = {__html: converter.makeHtml(title)};
  const textContent = {__html: converter.makeHtml(text)};
  return <div>
      <div dangerouslySetInnerHTML={titleContent}></div>
      <div dangerouslySetInnerHTML={textContent}></div>
    </div>
}

export default NoteDisplay;