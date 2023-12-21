
import './App.css';
import Boton from './componentes/boton';
import Contador from '../src/componentes/contador.js';
import freecodecamplogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const[numClics, setNumClics] = useState(0)

  const manejarClic = () => {
    setNumClics(numClics + 1);
}
  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className= 'freecodecamp-logo-contenedor' >
        <img 
          className='freecodecamp-logo'
          src={freecodecamplogo}
          alt='Logo de freecodecamp'/>
      </div>

      <div className='contenedor-principal'>
        
        <Contador numClics= {numClics} />
        

        <Boton 
        texto='Clic'
        esBotonDEClic={true}
        manejarClic={manejarClic} />

        <Boton
        texto='Reiniciar'
        esBotonDEClic={false}
        manejarClic={reiniciarContador} />
        
      </div> 
    </div>
  );
}

export default App;
