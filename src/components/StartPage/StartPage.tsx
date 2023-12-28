import ReactDOM from 'react-dom/client';
import './StartPage.css';
import SingleItem from './SingleItem/SingleItem';

export const StartPage = (props) => { 


  const getBonusData = async (event) => {
    
    const data = await props.getBonusDivsData();
    console.log(data);
  }

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
      let allBonusItems = props.startPageData.map((elem, index) => {
        return ( <SingleItem productTitle={elem.productTitle} imageLink={elem.imageLink} linkToProduct={elem.linkToProduct} key={index}></SingleItem> );
      });

  return (
    <div className="start-page">
      <p>StartPage</p>
      <p>On this page will be a button for proving a parsing settings, we test each time whether the parsing process runs properly</p>
      <button onClick = { getBonusData } >Get Data From Bonuses Page</button>
      <div className="bonusDivsWrapper">
        {allBonusItems}
        {/* <p>{props.startPageData[0].productTitle}</p> 
        <br />
        <img src={props.startPageData[0].imageLink} alt='' className="productImage" />
        <br />
        <a href={`https://www.${props.startPageData[0].linkToProduct}`} target="_blank">go to item!</a>
        <br /> <br />
        <hr />
        <p>{props.startPageData[1].productTitle}</p> 
        <br />
        <img src={props.startPageData[1].imageLink} alt='' className="productImage" />
        <br />
        <a href={`https://www.${props.startPageData[1].linkToProduct}`} target="_blank">go to item!</a>
        <br /> <br />
        <hr />  */}
      </div>
    </div>
  )
};
