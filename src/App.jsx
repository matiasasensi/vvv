import './App.css';
import Navbar from './components/Navbar/Navbar';
import Itemlistcontainer from './components/Itemlistcontainer/Itemlistcontainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {BaseDatos} from "./firebase/firebase";

function App() {
   BaseDatos()
  return (
    <>
     <BrowserRouter>
        <Navbar/>
        <Routes>         
          <Route path='/' element={<Itemlistcontainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} /> 
          <Route path='/category/:idCategoria' element={<Itemlistcontainer />} />         
        </Routes>
     </BrowserRouter>
    </>    
  );
}

export default App;



