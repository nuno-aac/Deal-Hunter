
import './css/w3.css';
import './css/style.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

import List from './components/list';


function App() {
  let [deals,setDeals] = useState([])
  let [page, setPage] = useState(0)

  let addDeals= () => {
    setPage(page+1)
  }

  useEffect(() => {
    axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=10&pageNumber=' + page)
      .then(dados => {
        console.log(dados.data)
        setDeals(prevState => prevState.concat(dados.data))
      })
  }, [page])


  return (
    <div className="dh-background">

      <div className='dh-center-width dt-header'>
        <img src="logodh3.png" alt="logo" className='w3-margin-top dh-logo'/>
        <img src="gamer.png" alt="logo" className=' dh-gamer' />
      </div>
      
      <List deals={deals} click={addDeals}/>

    </div>
  );
}

export default App;
