import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const Button = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Me ejecuté');
    return () => {
      console.log('Adiós');
    };
  }, []);
  return <button onClick={() => setCount(count + 1)}>Click {count}</button>;
};

const App = () => {
  const [showButton, setShowButton] = useState(true);
  return (
    <div>
      <button onClick={() => setShowButton(false)}>Eliminar botón</button>
      <div>{showButton && <Button />}</div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
