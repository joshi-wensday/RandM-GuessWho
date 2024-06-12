import './button.styles.css';

const Button = ({ onClick, className, buttonText }) => {
  return (
    <button 
        onClick={onClick}
        className={`button-49 ${className}`}
        type="search"
    >
    {buttonText}
    </button>
  );
};

export default Button;