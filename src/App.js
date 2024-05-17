import Navigation from './components/navigation/Navigation';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/Main/Main';
import Experience from './components/pages/Experience/Experience';
import MyApps from './components/pages/MyApps/MyApps';
import Contacts from './components/pages/Contacts/Contacts';
import Page404 from './components/pages/Page404/Page404';
import './styles/App.css';


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index path='/' element={<MainPage />} /> 
        <Route path='/experience' element={<Experience />} />
        <Route path='/apps' element={<MyApps />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/page404' element={<Page404 />} />
        <Route path="*" element={<Navigate replace to="/page404"/>} />
      </Routes>
    </>
  )
}

export default App;
