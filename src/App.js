import { Routes, Route } from 'react-router-dom';

import './App.css';
import Game from './pages/Game';
import NewGame from './pages/NewGame';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NewGame />} />
      <Route path='/game' element={<Game />} />
    </Routes>
  );
}

export default App;
