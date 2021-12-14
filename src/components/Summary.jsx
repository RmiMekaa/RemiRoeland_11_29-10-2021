import React from 'react';
import Tags from './Tags';
import PropTypes from 'prop-types';

class Summary extends React.Component {

  render() {
    const { title, location, tags } = this.props;
    return (
      <section className="summary">
        <h1 className='summary__title'>{title}</h1>
        <span className='summary__location'>{location}</span>
        <Tags tags={tags} />
      </section>
    )
  }
}

Summary.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default Summary;
