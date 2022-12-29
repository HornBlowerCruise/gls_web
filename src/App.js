import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar';
import Submenu01 from './pages/Topmenu01/Submenu01';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/topmenu01/submenu01" element={<Submenu01/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
