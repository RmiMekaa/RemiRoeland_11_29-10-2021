import React from 'react';
import arrow from '../assets/arrowUp.png';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {

  render() {
    return (
      <details className="dropdown">
        <summary>
          {this.props.name}
          <img src={arrow} alt="deploy"></img>
        </summary>
        {this.props.type === 'text' ? (
          <p className="dropdown__content">{this.props.text}</p>
        ) : (
          <ul className="dropdown__content">
            {this.props.list.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        )}
      </details>
    );
  }
}

Dropdown.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  list: PropTypes.array,
};

export default Dropdown;
