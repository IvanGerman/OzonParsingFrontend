import './StartPage.css';

export const StartPage = (props) => { 
  return (
    <div className="start-page">
      <p>StartPage</p>
      <p>On this page will be a button for proving a parsing settings, we test each time whether the parsing process runs properly</p>
      <p>{props.startPageData[0].key1}</p>
      <p>{props.startPageData[1].key2}</p>
    </div>
  )
};
