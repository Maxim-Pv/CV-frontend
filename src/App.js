import { useState } from 'react';
import './styles/App.css';
import Input from './components/UI/input/input';
import Button from './components/UI/button/button';
import Card from './components/UI/card/card';

const cards = [
  { id: 0, name: 'John Arderne'},
  { id: 1, name: 'Arthur Adams'},
  { id: 2, name: 'William Aiton'},
  { id: 3, name: 'David Axon'},
  { id: 4, name: 'James Bradley'},
];

function App() {
  const [list, setList] = useState(cards);
  const [query, setQuery] = useState('');

  const handleAddName = () => {
    const newUser = { id: new Date(), name: query};
    setList([...list, newUser]);
    setQuery('');
  }

  const removeCard = (id) => {
    const updatedList = list.filter((card) => card.id !== id);
    setList(updatedList);
  }

  return (
    <div className="App">
      <h2>Our users</h2>
      <div className='form-container'>
        <Input value={query} setValue={setQuery} />
        <Button onClick={handleAddName} />
      </div>

      {list.map((card) => {
        return (
          <Card key={card.id} id={card.id} name={card.name} onRemove={removeCard} />
        )
      })}
    </div>
  );
}

export default App;
