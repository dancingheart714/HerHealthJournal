import Button from './Button';
import Date from './Date';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
    const confirm = () => {
      props.onConfirm();
    };
  
    return (
      <div>
        <div className={classes.backdrop} onClick={confirm}></div>
        <div className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
  
          <div className={classes.content}>
            {props.date && (
              <Date date={props.date} className={classes['error-date']} />
            )}
            {!props.date && <p>{props.message}</p>}
          </div>
          <footer className={classes.actions}>
            <Button onClick={confirm}>Okay</Button>
          </footer>
        </div>
      </div>
    );
  };
  
  export default ErrorModal;