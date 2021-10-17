//import logo from './logo.png';
import './Message.css';

function Message(props) {
  return (
    <div className="Message">
      <header className="Message-header">
        
        <h3>Nowa sprawa to {props.deed}!</h3>
      </header>
      {/* <img src={logo} className="Message-logo" alt="logo" />
    
        <a
          className="Message-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dodaj osobę
        </a> */}
      
    </div>
  );
}

export default Message;
