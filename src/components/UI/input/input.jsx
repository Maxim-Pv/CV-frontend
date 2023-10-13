import './input.css';

const Input = function (props) {
    return <input className='input' placeholder={props.placeholder} value={props.value} onChange={(event) => {
        props.onChange(event.target.value);
    }}/> 
}

export default Input;

