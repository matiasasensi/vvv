import {useState,useEffect}  from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {    
    
        const [productos,setProductos] = useState([]);
        
        const {idCategoria} = useParams()
        useEffect(()=>{ 
            if (idCategoria){
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
                }
                fetch('../json/productos.json')
                .then(response => response.json())
                .then(items => {                    
                    const products = items.filter(prod => prod.idCategoria ===pagina)                
                    const productsList = ItemList({products})
                    setProductos(productsList)               
                })
            }        
            else{
                fetch('./json/productos.json')
                .then(response => response.json())
                .then(products => {                                
                    const productsList = ItemList({products})
                    setProductos(productsList)               
                })
            }
        },[idCategoria]);   
        
    return (        
        <div className='row'>
            {productos}
        </div>
    );
}

export default ItemListContainer;

