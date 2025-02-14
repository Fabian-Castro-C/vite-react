import React, { useState } from 'react';
import './animations.css';

const App: React.FC = () => {
  const [respuesta, setRespuesta] = useState<string | null>(null);
  const [eggCount, setEggCount] = useState<number>(0);
  const [easterEggMessage, setEasterEggMessage] = useState<string | null>(null);
  const [noButtonStyle, setNoButtonStyle] = useState<React.CSSProperties>({ position: "relative", left: "0px", top: "0px" });

  const handleYes = () => {
    setRespuesta('¡Eres la mejor! Sabía que aceptarías ser mi Valentín.');
  };

  const handleNo = () => {
    setRespuesta('¡Oh no! ¿Segura que no quieres ser mi Valentín?');
  };

  const handleTitleClick = () => {
    const newCount = eggCount + 1;
    setEggCount(newCount);
    // Si se ha hecho click 5 veces o más, mostramos un easter egg
    if (newCount >= 5 && !easterEggMessage) {
      setEasterEggMessage('¡Easter Egg! Mi Adrianita se va a casar conmigo algun día.');
    }
  };

  const handleNoMouseEnter = () => {
    // Mueve el botón "No" de forma aleatoria para hacerlo evasivo
    const randomX = Math.floor(Math.random() * 200 - 100); // Valor entre -50 y 50 px
    const randomY = Math.floor(Math.random() * 200 - 100);
    setNoButtonStyle({ position: "relative", left: `${randomX}px`, top: `${randomY}px` });
  };

  return (
    <div className="container">
      <h1 className="titulo" onClick={handleTitleClick}>
        ¿Quieres ser mi Valentín?
      </h1>
      <div className="botones">
        <button className="btn yes" onClick={handleYes}>
          Sí
        </button>
        <button className="btn no" onMouseEnter={handleNoMouseEnter} onClick={handleNo} style={noButtonStyle}>
          No
        </button>
      </div>
      {respuesta && <p className="respuesta">{respuesta}</p>}
      {respuesta === '¡Eres la mejor! Sabía que aceptarías ser mi Valentín.' && (
        <div className="hearts">
          <span className="heart">❤️</span>
          <span className="heart">❤️</span>
          <span className="heart">❤️</span>
        </div>
      )}
      {easterEggMessage && <p className="easter-egg">{easterEggMessage}</p>}
    </div>
  );
};

export default App;
