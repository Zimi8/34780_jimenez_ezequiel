import './App.css';
import React from 'react' ;
import logo from './logo.svg';

import NavBar from './crearcomponentes/navbarjsxx/navBarJSX';
import ItemListContainer from './crearcomponentes/itemListContainer/itemListContainer';
function App() {
  return (
   
    <div className="App">
         
        <NavBar/>
        <NavBar />
      <ItemListContainer greeting={'Annah Deco Design'} />
    </div>
     
  );

}


// RESUMEN parece HTML pero es JS
export default App;


 // Añadir carpetas respectivas a la clase 3 
