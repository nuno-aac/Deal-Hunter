
import './css/w3.css';
import './css/style.css';
import List from './components/list';


function App() {
  return (
    <div className="dh-background">
      <div className='dh-center-width dt-header'>
        <img src="logodh3.png" alt="logo" className='w3-margin-top dh-logo'/>
        <img src="gamer.png" alt="logo" className=' dh-gamer' />
      </div>
      
      <List/>
    </div>
  );
}

export default App;
