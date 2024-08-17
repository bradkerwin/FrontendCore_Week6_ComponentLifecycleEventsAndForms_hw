import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import NavBar from './NavBar';
import HomePage from './Homepage';
import { Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path='/characters' element={<CharacterList />} />

        <Route path='/characters/:id' element={<CharacterDetail />} />

      </Routes>
    </>
  )
}

export default App
