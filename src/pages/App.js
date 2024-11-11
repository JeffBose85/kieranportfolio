
import { Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Header from '../components/Header';
import MainPage from './MainPage';
import WorkPage from './WorkPage';
import AboutMe from './AboutMe';

function App() {

  return (
    <div>
    <Header></Header>
     <Routes>
       <Route path="/kieranportfolio" element={<MainPage/>} />
       <Route path="/kieranportfolio/workpage"  element={<WorkPage/>} />
     </Routes>
    </div>
  );
}

export default App;
