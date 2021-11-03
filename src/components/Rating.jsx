import React from 'react';
import starEmpty from '../assets/starEmpty.png'
import starFull from '../assets/starFull.png'

class Rating extends React.Component {
  constructor(props) {
    super(props); // number 0->5
    this.setRating()
    this.render();
  }

  setRating() {
    const stars = [];
    for (let i=this.props.rating; i > 0; i--) {
      stars.push(<img key={`${'starFull'}-${i}`} src={starFull} alt="rating" />)
    }
    for(let i=0; i < 5 - this.props.rating; i++) {
      stars.push(<img key={`${'starEmpty'}-${i}`} src={starEmpty} alt="rating" />)
    }
    return stars;
  }
  
  render() {
    const stars = this.setRating();
    return <div className='rating'>{stars}</div>
  }
}

export default Rating;
