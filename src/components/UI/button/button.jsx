import './button.css';

const Button = function (props) {
    return (
        <button className='button' onClick={props.onClick}>
            Submit
        </button>
    )
}

export default Button;