import './App.css';
import Navbar from './components/Navbar/Navbar';
import Itemlistcontainer from './components/Itemlistcontainer/Itemlistcontainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { CarritoProvider } from './context/CarritoContext';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';

function App() {
  
  return (
    <>
     <BrowserRouter>
     <CarritoProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Itemlistcontainer />} />
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/item/:id' element={<ItemDetailContainer/>} /> 
          <Route path='/category/:idCategoria' element={<Itemlistcontainer />} />
          <Route path='/Checkout' element={<Checkout />} />         
        </Routes>  
        
        </CarritoProvider>
     </BrowserRouter>
     
    </>    
  );
}

export default App;



