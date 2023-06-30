import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return(
        <div className = "container">
            <h1 className="greetingMsg">{greeting}</h1>
        </div>
    );
}

export default ItemListContainer;
