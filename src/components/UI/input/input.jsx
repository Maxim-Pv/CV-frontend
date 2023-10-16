import './input.css';

const Input = function ({value, setValue}) {
    return (
        <input className='input' value={value} onChange={(event) => {
            setValue(event.target.value)
        }}/>
    ) 
}

export default Input;

