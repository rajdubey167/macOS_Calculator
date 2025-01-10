import { useState } from 'react';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';
import calculate from './components/calculate';
import ThemeSwitcher from './components/ThemeSwitcher';
import History from './components/History';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [darkMode, setDarkMode] = useState(false);
  const [expression, setExpression] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleClick = (buttonName) => {
    let newExpression = expression + buttonName;

    if (buttonName === 'C') {
      setExpression('');
      setDisplayValue('0');
      return;
    }

    if (buttonName === '=') {
      const result = calculate(displayValue, buttonName);
      setDisplayValue(result);
      setExpression(result);

      setHistory((prevHistory) => [...prevHistory, `${expression} = ${result}`]);
    } else {
      setDisplayValue(calculate(displayValue, buttonName));
      setExpression(newExpression);
    }
  };

  const toggleTheme = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className='container'>
        <Display value={displayValue} darkMode={darkMode} />
        <button
          className={`history-toggle ${darkMode ? 'dark' : 'light'}`}
          onClick={toggleHistory}
          >
          {showHistory ? 'Hide History' : 'Show History'}
        </button>
        {showHistory && <History history={history} darkMode={darkMode} />}
      </div>
      <ButtonPanel onClick={handleClick} darkMode={darkMode} />
      <ThemeSwitcher darkMode={darkMode} toggleTheme={toggleTheme} />

    </div>
  );
}

export default App;
