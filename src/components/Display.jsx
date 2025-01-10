import PropTypes from 'prop-types';
import './styles/Display.css';
import { RiCloseLine } from '@remixicon/react';
import { RiSubtractFill } from '@remixicon/react';
import { RiExpandUpDownFill } from '@remixicon/react';

function Display({ value }) {
  return (
    <div className="display">
      <div className="display-main">
        <div className="red-dot dot">
          <RiCloseLine className="icon" />
        </div>
        <div className="yellow-dot dot">
          <RiSubtractFill className="icon" />
        </div>
        <div className="green-dot dot">
          <RiExpandUpDownFill className="icon" id='g-dot' />
        </div>
      </div>
      {value !== undefined && value !== null ? value : 'No value provided'}
    </div>
  );
}

Display.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Display.defaultProps = {
  value: 'No value provided',
};

export default Display;
