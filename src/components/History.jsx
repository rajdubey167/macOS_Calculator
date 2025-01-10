import PropTypes from 'prop-types';
import './styles/History.css';

const History = ({ history, darkMode }) => {
    return (
        <div className={`history-container ${darkMode ? 'dark' : 'light'}`}>
            <h3>History</h3>
            <ul className="history-list">
                {history.map((entry, index) => (
                    <li key={index} className="history-item">
                        {entry}
                    </li>
                ))}
            </ul>
        </div>
    );
};

History.propTypes = {
    history: PropTypes.arrayOf(PropTypes.string).isRequired, // Expect an array of strings
    darkMode: PropTypes.bool.isRequired, // Theme mode
};

export default History;
