import { useEffect, useMemo, useState } from 'react';
import './styles/App.css';
import Input from './components/UI/input/input';
import Button from './components/UI/button/button';
import Card from './components/UI/card/card';
import axios from 'axios';
import Select from './components/select/select';


function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const [selectedSort, setSelectedSort] = useState('');

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(response.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  
  const handleAddName = () => {
    const newUser = { id: new Date(), name: query };
    setData([...data, newUser]);
    setQuery('');
  }

  const removeCard = (id) => {
    const updatedData = data.filter((user) => user.id !== id);
    setData(updatedData);
  }

  const sortDataUsers = (sort) => {
    setSelectedSort(sort);
  }

  const sortedData = useMemo(() => {
      if (selectedSort === 'user.name') {
        return [...data].sort((a, b) => a.name.localeCompare(b.name));
      }
      return data;

  }, [data, selectedSort]);

  if (isLoading) {
    return <div style={{padding: '20px'}}>Loading...</div>
  }

  return (
    <div className="App">
      <h2>Our users</h2>
      <div className='form-container'>
        <Input value={query} setValue={setQuery} />
        <Button onClick={handleAddName} />
        <Select 
          value={selectedSort}
          onChange={sortDataUsers}
          defaultValue='sorting' 
          options = {[
            {value: 'user.name', name: 'by name'},
            {value: 'user.id', name: 'default'},
          ]}
        />
      </div>      
      {sortedData.map((user) => {
        return (
          <Card key={user.id} id={user.id} name={user.name} onRemove={removeCard} />
        )
      })}
    </div>
  );
}

export default App;
