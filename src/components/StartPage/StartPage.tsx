import ReactDOM from 'react-dom/client';
import './StartPage.css';

export const StartPage = (props) => { 

  // here we create bonusDivsWrapper content based on state data

  props.getBonusDivsData

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
      // here we create bonusDivsWrapper content based on response data
      // it should be created based on the state data and auto rerendered after state changes
      // const allbonusDivs = data.map((elem, index) => {
      //   return ( <div  key={index}>
      //     <a href={elem.linkToProduct}>{elem.productTitle}</a>
      //   </div> );
      // });
      //paste html into the bonusDivsWrapper
      // const container = document.getElementsByClassName('bonusDivsWrapper');
      // // @ts-ignore
      // const root = ReactDOM.createRoot(container);
      // root.render(allbonusDivs);
    });
  }
  return (
    <div className="start-page">
      <p>StartPage</p>
      <p>On this page will be a button for proving a parsing settings, we test each time whether the parsing process runs properly</p>
      <button onClick = { getBonusData } >Get Data From Bonuses Page</button>
      <div className="bonusDivsWrapper">
        <p>{props.startPageData[0].productTitle}</p> 
        <p>{props.startPageData[0].linkToProduct}</p> 
        <p>{props.startPageData[1].productTitle}</p> 
        <p>{props.startPageData[1].linkToProduct}</p> 
      </div>
    </div>
  )
};
