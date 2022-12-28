import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

// const App = () => <h1>Hola mundo</h1>;

class App extends Component {
  render() {
    return <h1>Holamundo</h1>;
  }
}

render(<App />, document.getElementById('root'));
