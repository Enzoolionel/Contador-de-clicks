import './App.css';
import freeCodeCampLogo from './imagenes/logo.jpg'
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {
  
  const manejarClick = () =>{
    setNumClick(numClick + 1);
  };

  const reiniciarContador = () =>{
    setNumClick(0)
  };

  const [numClick, setNumClick] = useState(0)

  return (
    <div className='App'>
      <div className='logo-freecodecamp'>
        <img className='logo'
        src={freeCodeCampLogo}
        alt='imagen del logo' 
        />
      </div>
      <div className='contenedor-contador'>
        <Contador
        numClick={numClick}
        />
        <Boton 
         texto='Clic'
         esBotonDeClick={true}
         manejarClick={manejarClick}
         />
        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
           manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;