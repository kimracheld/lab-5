import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0)

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <p>My counter: {counter}</p>
          <button onClick={() => handleClick()}>Click me!</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
