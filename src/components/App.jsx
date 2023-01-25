import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Itemlistcontainer from './Itemlistcontainer/Itemlistcontainer';


const App = () => {
    return (
      <>
        <div>
        <Navbar/>
        </div>
        <Itemlistcontainer Propiedad={"Hola"}/>
      
      </>
    );
};
export default App;
