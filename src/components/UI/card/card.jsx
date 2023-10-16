import './card.css';

const Card = ({ id, name, onRemove }) => {
    return (
        <div className='card'>
            <span className='card-name'>{name}</span>
            <button className='card-delete' onClick={() => onRemove(id)}>Delete</button>
        </div>               
    )
}

export default Card;