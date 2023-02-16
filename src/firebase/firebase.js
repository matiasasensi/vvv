// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore, collection, addDoc} from "firebase/firestore";

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
const db = getFirestore;
export const BaseDatos = async () => {
const promise = await fetch("json/productos.json")
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
  
  }
  )
)
}

