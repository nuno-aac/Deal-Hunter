import '../css/w3.css';
import '../css/style.css';

let item = {
    "internalName": "MONSTERSLAYERS",
    "title": "Monster Slayers",
    "metacriticLink": "/game/pc/monster-slayers",
    "dealID": "efnekCfOb2PEuQKTA0pkNNle%2FulyRP4j9fx0E5vdncQ%3D",
    "storeID": "3",
    "gameID": "167601",
    "salePrice": "2.43",
    "normalPrice": "8.99",
    "isOnSale": "1",
    "savings": "72.969967",
    "metacriticScore": "86",
    "steamRatingText": "Very Positive",
    "steamRatingPercent": "88",
    "steamRatingCount": "313",
    "steamAppID": "496620",
    "releaseDate": 1534291200,
    "lastChange": 1535037686,
    "dealRating": "10.0",
    "thumb": "https://steamcdn-a.akamaihd.net/steam/apps/496620/capsule_sm_120.jpg?t=1533784859"
}

function ListItem(){
    return(
        <div className="dh-list-item dh-content-box w3-margin-32 dh-center-height">
            <img src={item.thumb} alt={item.title} className='w3-margin w3-round-large w3-border w3-border-black'/>
            <div className='dh-item-text'> 
                {item.title} ({Math.round(item.savings)}% off) 
            </div>
        </div>
    )
}

export default ListItem