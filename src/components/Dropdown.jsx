import React from 'react';
import arrow from '../assets/arrowUp.png';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {

  render() {
    const { name, type, description, equipments } = this.props
    return (
      <details className="dropdown">
        <summary>
          {name}
          <img src={arrow} alt="deploy"></img>
        </summary>
        {type === 'text' ? (
          <p className="dropdown__content">{description}</p>
        ) : (
          <ul className="dropdown__content">
            {equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        )}
      </details>
    );
  }
}

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string,
  equipments: PropTypes.arrayOf(PropTypes.string)
};

export default Dropdown;
