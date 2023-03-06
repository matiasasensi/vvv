import {useState,useEffect} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getProductos } from '../../firebase/firebase'

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const {id} = useParams()
    useEffect(() => {
        getProductos()
        .then(products => {
            const item = products.find(prod => prod.id === id)
            setProducto(item)
        })
    }, [id])
    
    return (
        producto && <div className='card mb-3 container itemDetail'>
            <ItemDetail item={producto}/>
        </div>
    )
}

export default ItemDetailContainer;