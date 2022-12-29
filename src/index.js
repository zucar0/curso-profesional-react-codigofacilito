import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const Saludo = () => {
  const [name, setName] = useState('');
  return (
    <div>
      <input type="text" onChange={(ev) => setName(ev.target.value)} />
      <p>Hola {name}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      {' '}
      <Saludo />{' '}
    </div>
  );
};

render(<App />, document.getElementById('root'));
