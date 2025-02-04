const Button = ({ label = 'Click me', variant = 'primary' }) => {
    return (
      <button className={variant}>
        {label}
      </button>
    );
  };
  
  export default Button;