import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import './App.css';
import Message from './Message';

const myDeed = 'English Lesson';
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        Dodaj sobie sprawy
        <h3>Dzień dobry, {props.name}!</h3>
          ReactDOM.render(
            <React.StrictMode>
              
              <Message deed={myDeed} />
            </React.StrictMode>,
          document.getElementById("root")
          );
      </header>

      
      <img src={logo} className="App-logo" alt="logo" />
    
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dodaj osobę
        </a>
      
    </div>
  );
}



export default App;
