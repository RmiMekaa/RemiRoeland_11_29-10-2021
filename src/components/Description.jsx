import React, { Component } from 'react';
import Dropdown from './Dropdown';
import Owner from './Owner';
import Rating from './Rating';

class Description extends Component {
  constructor(props) {
    super(props); // Object (housing data)
    this.render();
  }

  render() {
    return (
      <section className="housingResume">
        <article>
          <h1>{this.props.data.title}</h1>
          <span>{this.props.data.location}</span>
          <div className="tags"></div>
        </article>
        <aside>
          <Owner name={this.props.data.host.name} picture={this.props.data.host.picture} />
          <Rating rating={this.props.data.rating}/>
        </aside>
        <div className="dropdowns">
          <Dropdown type="text" name="Description" text={this.props.data.description} />
          <Dropdown type="list" name="Équipements" list={this.props.data.equipments} />
        </div>
      </section>
    );
  }
}

export default Description;
