
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../styles/App.css';
import MainPage from './MainPage';

function App() {
  return (
    <html>
    <head>
      <link rel="stylesheet" href="https://use.typekit.net/hjt1gxe.css"/>
    </head>


     <Routes>
       <Route path="/kieranportfolio" element={<MainPage/>} />
     </Routes>


    </html>
  );
}

export default App;
