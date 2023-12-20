
import './App.css';
import freecodecamplogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/boton';



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
        <Boton 
        texto='clic'
        esBotonDEClic={true}
        manejarClic={manejarClic}/>
        <Boton
        texto='Reiniciar'
        esBotonDEClic={false}
        manejarClic={reiniciarContador}/>
        
      </div> 
    </div>
  );
}

export default App;
