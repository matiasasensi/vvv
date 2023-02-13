import React from 'react';
import { Link } from 'react-router-dom';


export const Item = ({item}) => {
    return (
      <div className="card mb-3 border-light cartita" style={{width:'18rem', margin:'1em'}}>
          <img src={`../img/${item.img}`} className="card-img-top imagen" alt={`Imagen de ${item.nombre}`} />
              <div className="card-body cardBody">
                  <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                  <p className="card-text">{item.marca}</p>
                  <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                  <button className="btn btn-dark" ><Link className='nav-link' to={`/item/${item.id}`}>Ver Producto</Link></button>
              </div>
        </div>
  
    )
  }

  
export default Item;

