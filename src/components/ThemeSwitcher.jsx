import PropTypes from 'prop-types';
import './styles/ThemeSwitcher.css';

const ThemeSwitcher = ({ darkMode, toggleTheme }) => (
    <div id="theme-switcher-container">
        <button className="theme-switcher" onClick={toggleTheme}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    </div>
);

ThemeSwitcher.propTypes = {
    darkMode: PropTypes.bool.isRequired, 
    toggleTheme: PropTypes.func.isRequired,
};

export default ThemeSwitcher;
