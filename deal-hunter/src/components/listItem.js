import '../css/w3.css';
import '../css/style.css';

function ListItem({item}){
    return(
        <div className="dh-list-item dh-content-box w3-margin dh-center-height">
            <img src={item.thumb} alt={item.title} className='w3-margin w3-round-large w3-border w3-border-black'/>
            <div className='dh-item-text'> 
                {item.title} <span className='dh-item-rating'>{item.metacriticScore}% 👍</span> 
            </div>
            <div className='dh-item-price'>
                <div className='dh-discount-price'>{item.salePrice}€</div>
                <div>
                    <span className='dh-crossed-price'>{item.normalPrice}€</span> 
                    <span className='dh-item-discount'>-{Math.round(item.savings)}%</span>
                </div>
            </div>
        </div>
    )
}

export default ListItem