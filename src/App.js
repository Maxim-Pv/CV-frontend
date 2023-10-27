import './styles/App.css';
import Navigation from './components/navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import PageIndex from './components/pages/Main';
import PagePortfolio from './components/pages/Portfolio';
import Contacts from './components/pages/Contacts';
import Page404 from './components/pages/Page404';


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index path='/' element={<PageIndex />} /> 
        <Route path='/portfolio' element={<PagePortfolio />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/page404' element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App;
