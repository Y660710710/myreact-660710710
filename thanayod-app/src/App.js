import './App.css';
import Hello, { hello as Hello2 } from './Hello';
import JSXExamples from './components/JSXExamples.jsx';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Hello/>
      <JSXExamples/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <hello/>
      </header>
      <Hello2/>
    </div>
  );
}

export default App;
