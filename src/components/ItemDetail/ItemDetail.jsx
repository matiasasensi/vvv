import {ItemCount} from '../ItemCount/ItemCount'
export const ItemDetail = ({item}) => {
  return (
    <div className='row g-0'>
        <div className="col-md-4">
            <img src={item.img} className="img-fluid rounded-start" alt={`Imagen de ${item.nombre}`} />
        </div>
        <div className="col-md-8 w-25">
            <div className="card-body">
                <h5 className='card-title'>{item.nombre} {item.modelo}</h5>
                <p className='card-text'>Marcaaaaa: {item.marca}</p>
                <p className='card-text'>Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <p className='card-text'>Stock: {item.stock}</p>
                <ItemCount valInicial={1} item={item} stock={item.stock}/>
            </div>
        </div>
     
    </div>
  )
}