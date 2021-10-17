//import logo from './logo.png';
import './Message.css';

function Message(props) {
  return (
    <div className="Message">
      <header className="Message-header">
        
        <h3>Nowa sprawa to {props.deed}!</h3>
      </header>
     
      
    </div>
  );
}

export default Message;
