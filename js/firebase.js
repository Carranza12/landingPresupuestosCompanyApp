import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getFirestore, collection, addDoc, doc, setDoc} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js"


// Add a new document in collection "cities"

const firebaseConfig = {
  apiKey: "AIzaSyCoSL0XlHNIxWrrnB3jM7txNOXbZUtq9vE",
  authDomain: "presupuestos-dev.firebaseapp.com",
  projectId: "presupuestos-dev",
  storageBucket: "presupuestos-dev.appspot.com",
  messagingSenderId: "28722044310",
  appId: "1:28722044310:web:79d7cbc5309b6a07f5d1b7"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const document = {

}

export const saveClienteEnEspera = (data)=>{
  addDoc(collection(db,'clientes_en_espera'), data)
 

}


