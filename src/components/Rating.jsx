import React from 'react';
import PropTypes from 'prop-types';
import starEmpty from '../assets/starEmpty.png'
import starFull from '../assets/starFull.png'

class Rating extends React.Component {

  setRating() {
    const rating = parseInt(this.props.rating);
    const stars = [];
    for (let i=rating; i > 0; i--) {
      stars.push(<img className='star' key={`${'starFull'}-${i}`} src={starFull} alt="rating" />)
    }
    for(let i=0; i < 5 - rating; i++) {
      stars.push(<img className='star' key={`${'starEmpty'}-${i}`} src={starEmpty} alt="rating" />)
    }
    return stars;
  }
  
  render() {
    const stars = this.setRating();
    return <div className='rating'>{stars}</div>
  }
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
