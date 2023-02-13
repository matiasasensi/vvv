
import { Link } from "react-router-dom";
const Categorias = () => {
    return (

<li className="nav-item dropdown">
                
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </a>
                <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/category/Computadoras"}>Computadoras</Link></li>
              <li><Link className="dropdown-item" to={"/category/Celulares"}>Celulares</Link></li>              
              <li><Link className="dropdown-item" to={"/category/Televisores"}>Televisores</Link></li>
              <li><Link className="dropdown-item" to={"/category/Electronica"}>Juguetes</Link></li>
                </ul>
              </li>
              
              
               );
            };
            
            export default Categorias;