import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Frase({frase}) {
  return (
    <div className="frase">
        <h1>{frase.quote}</h1>
        <p>- {frase.author}</p>
    </div>
  )
}

function App() {

  const [frase, obtenerFrase] = useState({});

  const consultarAPI = async () => {
    // const consulta = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    // const resultado = await consulta.json();
    const resultado = await axios('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    // agregar el resultado de la api al state 
    obtenerFrase(resultado.data[0])
  }

  // consulta a una rest API
  useEffect(
    () => {
      consultarAPI()
    },[]); 

    console.log(frase);


  return (
    <div className="contenedor">
        <Frase 
          frase={frase}
        />
        <button
          onClick={consultarAPI}
        >Nueva Frase</button>
    </div>
  );
}

export default App;
