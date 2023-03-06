import { useState } from "react"
import { useCarritoContext } from '../../context/CarritoContext'

export const ItemCount = ({valInicial, item, stock, textoAlternativo}) => {
  
  const {addItem} = useCarritoContext()
 
  const [contador, setContador] = useState(valInicial)
            

  const sumar = () =>  (contador < stock) && setContador(contador + 1) 
  const restar = () => (contador > 1)  && setContador(contador - 1)  
  const onAdd = () => {
    addItem(item, contador)
  }
  

  return (
    <>
        <button className="btn btn-dark" onClick={() => sumar()}>+</button>
            {contador}
        <button className="btn btn-light" onClick={() => restar()}>-</button>
        <button onClick={() => onAdd()} className='btn btn-secondary'>{textoAlternativo || "Agregar al carrito"}</button>
    </>
  )
}