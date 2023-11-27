import './StartPage.css';

export const StartPage = (props) => { 

  const baseURL = 'http://localhost:5000/api/';

  const getBonusData = async (event) => {
    console.log('getBonusData')
    await fetch(baseURL + 'books', {
      method: 'POST', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({
        "link": "4444444",
        "message": "8888888"
    }) 
    })
    .then((response) => { 
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  }
  return (
    <div className="start-page">
      <p>StartPage</p>
      <p>On this page will be a button for proving a parsing settings, we test each time whether the parsing process runs properly</p>
      <p>{props.startPageData[0].key1}</p>
      <p>{props.startPageData[1].key2}</p>
      <button onClick = { getBonusData } >Get Data From Bonuses Page</button>
    </div>
  )
};
