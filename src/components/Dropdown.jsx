import React, { Component } from 'react';
import arrow from '../assets/arrowUp.png';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.render();
  }

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

export default Dropdown;
