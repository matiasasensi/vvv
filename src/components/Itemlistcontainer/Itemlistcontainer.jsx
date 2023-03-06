import {useState,useEffect}  from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList';
import { getProductos } from '../../firebase/firebase'

const ItemListContainer = () => {    
    
        const [productos,setProductos] = useState([]);
        
        const {idCategoria} = useParams()
        useEffect(()=>{
            getProductos()
                .then(items => {
                    let  products = items;
                    if(idCategoria){
                        let pagina;
                        switch (idCategoria) {
                            case 'Computadoras': pagina=1;
                                break;
                            case 'Celulares': pagina=2;
                                break;                        
                            case 'Televisores': pagina=3;
                                break;
                            case 'Electronica':  pagina=4;
                                break;
                            default:
                                pagina=1
                        }
                        products = items.filter(prod => prod.idCategoria === pagina)
                    }
                    
                    const productsList = ItemList({products})
                    setProductos(productsList)
                })
        },[idCategoria]);   
        
    return (        
        <div>
            {productos}
        </div>
    );
}

export default ItemListContainer;

