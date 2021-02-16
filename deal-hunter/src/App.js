
import './css/w3.css';
import './css/style.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal'

import List from './components/list';


const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    backgroundColor: 'rgba(2, 1, 0, 0.65)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    borderRadius: '15px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    padding: '40px',
    backgroundColor: '#333333',
    color: 'whitesmoke',
    border: '#222222 solid 2px',
  }
};

function App() {
  let [deals,setDeals] = useState([])
  let [page, setPage] = useState(0)
  let [loading, setLoading] = useState(false)
  let [isModalOpen, setIsModalOpen] = useState(false)

  let addDeals= () => {
    setLoading(true)
    setPage(page+1)
  }

  let closeModal = () => {
    setIsModalOpen(false)
  }
  let openModal = () => {
    setIsModalOpen(true)
  }

  useEffect(() => {
    axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=10&pageNumber=' + page)
      .then(dados => {
        console.log(dados.data)
        setDeals(prevState => prevState.concat(dados.data))
        setLoading(false)
      })
  }, [page])


  return (
    <div className="dh-background">

      <div className='dh-center-width dh-center-height dt-header'>
        <img src="logodh3.png" alt="logo" className='w3-margin-top dh-logo'/>
        <img src="gamer.png" alt="logo" className=' dh-gamer' />
        <div className='dh-filter-container dh-content-box' onClick={openModal}>
          <img src="filter.svg" alt="logo" className='dh-filter' />
        </div>
      </div>

      <List deals={deals} click={addDeals} loading={loading}/>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles} ariaHideApp={false}>
        <div className='dh-center-height dh-flex-column'>
          <div className='w3-xlarge w3-margin-bottom'>Filter:</div>
          <div>
            <input type='radio'/><label className='w3-margin-left'> Relevância</label>
          </div>
        </div>
      </Modal>

    </div>
  );
}

export default App;
