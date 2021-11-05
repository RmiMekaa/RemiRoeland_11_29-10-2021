import React from 'react';

class Owner extends React.Component {
  constructor(props) {
    super(props);
    this.name = this.props.name.split(' ');
  }

  render() {
    return (
      <div className="owner">
        <h3>{this.name[0]}<br />{this.name[1]}</h3>
        <img src={this.props.picture} alt={this.props.name} />
      </div>
    );
  }
}


export default Owner;
