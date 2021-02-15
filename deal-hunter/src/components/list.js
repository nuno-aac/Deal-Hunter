import '../css/w3.css';
import '../css/style.css';
import ListItem from './listItem';

function List({deals}){
    return(
        <div className="dh-center-height dh-flex-column dh-list-container">
            {deals.map((v,i) => <ListItem item={v} key={i} />)}
            <div className='dh-content-box dh-add-items'> + </div>
        </div>
    )
}

export default List