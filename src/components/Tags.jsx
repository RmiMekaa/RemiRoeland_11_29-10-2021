import React from "react";
import PropTypes from 'prop-types';

class Tags extends React.Component {

  render() {
    return (
      <div className="tags">
        {this.props.tags.map((tag) => (
          <span key={tag}className='tag'>{tag}</span>
        ))}
      </div>
    )
  }
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default Tags;
