import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Teams from './pages/teams.js';
import Main from './pages/main.js';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Teams />} />
      <Route path='/main' element={<Main />} />
    </Routes>
  );
}

export default App;
