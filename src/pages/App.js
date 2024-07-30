
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../styles/App.css';
import MainPage from './MainPage';
import RouterTest from './RouterTest';

function App() {
  return (
    <>
     <nav> 
      <Link to={"/kieranportfolio"}>Home</Link>
      <Link to={"/kieranportfolio/test"}>Test</Link>
     </nav>

     <Routes>
       <Route path="/kieranportfolio" element={<MainPage/>} />
       <Route path="/kieranportfolio/test" element={<RouterTest/>}/>
     </Routes>
    </>
  );
}

export default App;
