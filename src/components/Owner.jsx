import React from 'react';
import PropTypes from 'prop-types';

class Owner extends React.Component {

  render() {
    const name = this.props.name.split(' ');

    return (
      <div className="owner">
        <h3>{name[0]}<br />{name[1]}</h3>
        <img src={this.props.picture} alt={this.props.name} />
      </div>
    );
  }
}

Owner.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
};

export default Owner;
