import Button from '../mood-tracker/Button';
import Date from '../mood-tracker/Date';
    
const ErrorModal = (props) => {
    const confirm = () => {
      props.onConfirm();
    };
  
    return (
      <div>
        <div className="backdrop" onClick={confirm}></div>
        <div className="modal">
          <header className="header">
            <h2>{props.title}</h2>
          </header>
  
          <div className="content">
            {props.date && (
              <Date date={props.date} className="error-date" />
            )}
            {!props.date && <p>{props.message}</p>}
          </div>
          <footer className="actions">
            <Button onClick={confirm}>Okay</Button>
          </footer>
        </div>
      </div>
    );
  };
  
  export default ErrorModal;