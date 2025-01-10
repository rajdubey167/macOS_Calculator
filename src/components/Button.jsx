import PropTypes from "prop-types";
import "./styles/Button.css";

function Button({ darkMode, name, onClick, className = "" }) {
  const isOperator = ["+", "-", "*", "÷", "=", "*"].includes(name);
  const isSpecial = ["0","1","2","3","4","5","6","7","8","9","."].includes(name);

  if (isOperator && darkMode) {
    return (
      <button
        type="button"
        id="ops"
        className={`button ${className}`.trim() }
        onClick={() => onClick(name)}
        onChange={() => onClick(darkMode)}
      >
        {name}
      </button>
    );
  } else if(isSpecial && darkMode) {
    return (
      <button
        type="button"
        id="num"
        className={`button ${className}`.trim()}
        onClick={() => onClick(name)}
        onChange={() => onClick(darkMode)}
      >
        {name}
      </button>
    );
  }
  return (
    <button
      type="button"
      className={`button ${className}`.trim()}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, 
  className: PropTypes.string, 
  darkMode: PropTypes.bool.isRequired,
};

export default Button;
