import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import React from 'react';

function App() {
  return (
  <>
  <NavBar/>
  <BrowserRouter>
    <Routes>
      <Route index element={<ItemListContainer/>}></Route>
      <Route path='/counter' element={<ItemCount stock='10' initial='1' onAdd=''/>}></Route>
      
    </Routes>
  </BrowserRouter>  
    
  </>
  );
}

export default App;
