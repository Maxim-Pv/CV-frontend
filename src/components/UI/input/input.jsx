import './input.css';

const Input = function ({value, setValue}) {

    const handleInputChange = ((event) => {
        setValue(event.target.value)
    });

    return (
         <input className='input' value={value} placeholder = "Enter your data..." onChange={handleInputChange} />
    ) 
}

export default Input;

