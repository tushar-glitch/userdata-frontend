import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create/Create';
import Get_all from './components/Get_all/Get_all';
import Navbar from './components/Navbar/Navbar';
import Update from './components/Update/Update';
import Delete from './components/Delete/Delete';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Create/>}/>
        <Route path='/update' exact element={<Update/>}/>
        <Route path='/delete' exact element={<Delete/>}/>
        <Route path='/all' exact element={<Get_all/>}/>
      </Routes>
    </div>
  );
}

export default App;
