import './button.css';

const Button = function ({onClick}) {
    return (
        <button className='button' onClick={onClick}> Add </button>  
    )
}

export default Button;