import { Link } from 'react-router-dom';
import {ItemCount} from '../ItemCount/ItemCount'
import { useCarritoContext } from "../../context/CarritoContext";



export const Item = ({item}) => {
  const { carrito } = useCarritoContext()
  
  
  const cantidad = carrito.find(prod => prod.id === item.id) ? 
    carrito.find(prod => prod.id === item.id).cant
    : 0


  return (
    <div className="card mb-3 border-light cartita" style={{width:'18rem', margin:'1em'}}>
        <img src={item.img} className="card-img-top imagen" alt={`Imagen de ${item.nombre}`} />
            <div className="card-body cardBody">
                <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                <p className="card-text">{item.marca}</p>
                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                {cantidad ? 
                  <ItemCount item={item} valInicial={cantidad} stock={item.stock} textoAlternativo="Cambiar cantidad" />
                  :
                  <></>  
                }
                <button className="btn btn-dark" ><Link className='nav-link' to={`/item/${item.id}`}>Ver Producto</Link></button>
            </div>
      </div>

  )

}

  
export default Item;

