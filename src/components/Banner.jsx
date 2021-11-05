import React from 'react';
import PropTypes from 'prop-types';

class Banner extends React.Component {

  render() {
    return <div className={this.props.className}>{this.props.text ? <h1>{this.props.text}</h1> : null}</div>;
  }
}

Banner.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};


export default Banner;
