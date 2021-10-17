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
            <h1>Dziennik rodzinny</h1>
            <h3>Dzień dobry, {props.name}!</h3>
            Dodaj sobie sprawy
                <React.StrictMode>              
                <Message deed={myDeed} />
                </React.StrictMode>
            
        </header>

            <img src={logo} className="App-logo" alt="logo" />
            <a className="App-link" href="#">
                Dodaj osobę
            </a>
        
    </div>
  );
}



export default App;
