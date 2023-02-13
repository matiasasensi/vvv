
import Item from '../Item/Item';

const Itemlist = ({products}) => {
    return (
        <>
        <div className='componentePadreDeNuestrasCards' >
            {products.map(producto =>  <Item key={producto.id} item={producto}/>)
            } 
        </div>
        </>
    );
}

export default Itemlist;

