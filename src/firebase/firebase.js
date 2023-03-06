// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAApXw5R7SvJm9eOzyWgMLXN8aKKypw3w",
  authDomain: "react-proyecto-c906e.firebaseapp.com",
  projectId: "react-proyecto-c906e",
  storageBucket: "react-proyecto-c906e.appspot.com",
  messagingSenderId: "1052978337794",
  appId: "1:1052978337794:web:cebda7e3d9112cfa8fef1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const BaseDatos = async () => {
const promise = await fetch("/json/productos.json")
const productos = await promise.json()
productos.forEach (async (prod) =>
  await addDoc (collection(db,"productos"),
  {nombre: prod.nombre,
  marca: prod.marca,
  modelo: prod.modelo,
  idCategoria: prod.idCategoria,
  stock: prod.stock,
  precio: prod.precio,
  img: prod.img
  
  })
)
}

export const getProductos = async() => {
  const productos = await getDocs(collection(db,"productos"))
  const items = productos.docs.map(prod => {
      return {...prod.data(), id: prod.id}
  })
  return items
}

export const getProducto = async(id) => {
  const producto = await getDoc(doc(db, "productos", id))
  console.log(producto.data())
  const item = {...producto.data(), id: producto.id}
  return item
}

export const updateProducto = async(id, info) => {
  await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto = async(id) => {
  await deleteDoc(doc(db, "productos", id))
}

export const createOrdenCompra = async(cliente, items, precioTotal, fecha) => {
  console.table(items)
  console.log('cliente', cliente)
  const { nombre, email, celular, direccion } = cliente;
  const aux = items.map((item) => {
    return { cantidad: 2, id: item.id }
  })

  const ordenDeCompraAMandar = {
    cliente: {
      nombre: nombre,
      email: email,
      celular: celular,
      direccion: direccion,
    },
    items: aux,
    precioTotal,
    fecha
  }
  const ordenCompra = await addDoc(collection(db, "ordenes"), ordenDeCompraAMandar)
  return ordenCompra
}

export const getOrdenCompra = async(id) => {
  const ordenCompra = await getDoc(doc(db, "ordenes", "vLvxxn3tb7hO6Dm2FNkS"))
 
  const oCompra = {...ordenCompra.data(), id: ordenCompra.id}
  console.log(ordenCompra.data())
  return oCompra
}