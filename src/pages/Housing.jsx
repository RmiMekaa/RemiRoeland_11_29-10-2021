import React from 'react';
import Carousel from '../components/Carousel';
import Summary from '../components/Summary';
import Owner from '../components/Owner';
import Rating from '../components/Rating';
import Dropdown from '../components/Dropdown';
import { Redirect } from "react-router-dom";
import getHousingData from "../data/dataManager";

class Housing extends React.Component {
  constructor(props) {
    super(props);
    this.data = getHousingData(this.props.match.params.id);
  }

  render() {
    if (this.data === null) return <Redirect to="/errorPage" />
    return (
      <main className="housing">
        <Carousel pictures={this.data.pictures} />
        <div className="housing__description">
          <Summary title={this.data.title} location={this.data.location} tags={this.data.tags} />
          <aside className="housing__aside">
            <Owner name={this.data.host.name} picture={this.data.host.picture} />
            <Rating rating={this.data.rating}/>
          </aside>
        </div>
          <div className="housing__dropdowns">
            <Dropdown type="text" name="Description" text={this.data.description} />
            <Dropdown type="list" name="Équipements" list={this.data.equipments} />
          </div>
      </main>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
}

export default Housing;
