
import './App.css';
import Boton from './componentes/boton';
import Contador from '../src/componentes/Contador';
import freecodecamplogo from './imagenes/freecodecamp-logo.png';


function App() {

  const manejarClic = () => {
    console.log('Clic');
}
  const reiniciarContador = () => {
    console.log('reiniciar');
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
        
        <Contador numClics= '5' />
        

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
