import { useState } from 'react';
import Form from './components/UI/form/form';
import './styles/App.css';
import Input from './components/UI/input/input';
import Button from './components/UI/button/button';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleName = () => {
    const updateFullName = (`${firstName} ${lastName}`);
    setFullName(updateFullName)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='container-for-inputs'>
          <Input placeholder="First name" value={firstName} onChange={setFirstName} />
          <Input placeholder="Last name" value={lastName} onChange={setLastName} />
        </div>
        <h2 className='fullName'>{fullName}</h2>
        <Button onClick={handleName}/>
      </header>
    </div>
  );
}

export default App;
