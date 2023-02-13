import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Itemlistcontainer from './Itemlistcontainer/Itemlistcontainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
     
      <>
      
<BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Itemlistcontainer/>}/> 
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:idCategoria' element={<Itemlistcontainer/>}/>
      </Routes> 
    </BrowserRouter>
</>
    );
};
export default App;



