import React from 'react';
import Tags from './Tags';
import PropTypes from 'prop-types';

class Summary extends React.Component {

  render() {
    return (
      <section className="summary">
        <h1 className='summary__title'>{this.props.title}</h1>
        <span className='summary__location'>{this.props.location}</span>
        <Tags tags={this.props.tags}/>
      </section>
    )
  }
}

Summary.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string
};

export default Summary;
