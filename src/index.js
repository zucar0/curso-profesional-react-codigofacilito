import React from 'react';
import { render } from 'react-dom';
import './style.css';

const nombres = ['Uriel', 'Gabriel', 'Antonio', 'Josimar'];

function getNombres() {
  const elementosListas = [];
  for (var i = 0; i < nombres.length; i++) {
    elementosListas.push(<li>{nombres[i]}</li>);
  }
  console.log(elementosListas);
  return elementosListas;
}

const Nombres = () => {
  return (
    <ul>
      {nombres.map((nombre, index) => (
        <li key={index}>{nombre}</li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <h1>
      <Nombres />
    </h1>
  );
};

render(<App />, document.getElementById('root'));
