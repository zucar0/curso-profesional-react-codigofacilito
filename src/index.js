import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

// const App = () => <h1>Hola mundo</h1>;

const Saludar = ({ nombre, idioma = 'es-mx' }) => {
  console.log(idioma);
  const saludo = idioma === 'es' ? 'Hola' : 'Hello';
  return (
    <p>
      {saludo} {nombre}
    </p>
  );
};

const App = () => {
  return (
    <div>
      <Saludar nombre="Antonio" />
    </div>
  );
};

render(<App />, document.getElementById('root'));
