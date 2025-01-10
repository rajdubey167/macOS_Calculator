import PropTypes from "prop-types";
import Button from "./Button";
import "./styles/ButtonPanel.css";

function ButtonPanel({ onClick, darkMode }) {
  const buttons = [
    ["(", ")", "MC", "M+", "M-", "MR", "C", "+/-", "%", "÷"],
    ["2nd", "x^2", "x^3", "x^y", "e^x", "10^x", "7", "8", "9", "*"],
    ["1/x", "2√x", "3√x", "y√x", "ln", "log10", "4", "5", "6", "-"],
    ["x!", "sin", "cos", "tan", "e", "EE", "1", "2", "3", "+"],
    ["Rad", "sinh", "cosh", "tanh", "π", "Rand", "0", ".", "="],
  ];

  return (
    <div className="button-panel">
      {buttons.map((row, i) => (
        <div key={i} className="button-row">
          {row.map((btn, j) => (
            <Button
              key={`${i}-${j}`}
              name={btn}
              onClick={onClick}
              darkMode={darkMode}
              className={btn === "0" ? "button-0" : ""}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default ButtonPanel;
