import React from "react";

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

export default Tags;
