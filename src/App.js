import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.strattonoakmont.net/"
          target="_blank"
          rel="noopener noreferrer"
          style={{"textDecoration":"none", "fontFamily": "Haircut", "fontSize": "3rem"}}
        >
          Stratton Oakmunt
        </a>
      </header>
    </div>
  );
}

export default App;
