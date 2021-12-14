import React from "react";
import PropTypes from 'prop-types';

class Tags extends React.Component {

  render() {
    const { tags } = this.props;
    return (
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className='tag'>{tag}</span>
        ))}
      </div>
    )
  }
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
