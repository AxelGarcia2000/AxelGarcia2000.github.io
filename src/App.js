import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  
  return (

   <div className="App">

     <Banner
     titulo6= "Desarrollo de Aplicaciones para Dispositivos Móviles" 
     />

     < Header
     titulo= "Example #"
     numero={8}
     />

     <Banner
     numero={8}
     titulo1= "/Oct/"
     numero2={2021}
     />
    
        <Body
        texto1="Practica 1 - Unidad 2"
      
        texto2="1. Tipos de componentes"
        texto3="2. Contenedores"
        texto4="3. Usar mas de un componente"
        texto5="4. Funciones"
        texto6="5. Props"
        texto7="6. Props-Types"
        texto8="7. DefaultfProps"
        />
      
        <Footer
        pie={<p>  Copyright &copy; Todos los derechos reservados</p>}
        />
    </div>
    
  );
}

export default App;
