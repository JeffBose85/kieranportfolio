
import { Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import MainPage from './MainPage';

function App() {
  return (
     <Routes>
       <Route path="/kieranportfolio" element={<MainPage/>} />
     </Routes>
  );
}

export default App;
