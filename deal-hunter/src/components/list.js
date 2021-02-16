import '../css/w3.css';
import '../css/style.css';
import ListItem from './listItem';
import Loader from 'react-loader-spinner';

function List( { deals, click, loading } ){
    return(
        <div className="dh-center-height dh-flex-column dh-list-container">
            {deals.map((v,i) => <ListItem item={v} key={i} />)}
            { !loading ? 
                <div className='dh-content-box dh-add-items' onClick={click}> + </div>
                :
                <Loader type="TailSpin" color="#1a1a1a" height={55} width={55} className='dh-loading' />
            }
        </div>
    )
}

export default List