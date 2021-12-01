import React from 'react';
import Carousel from '../components/Carousel';
import Summary from '../components/Summary';
import Owner from '../components/Owner';
import Rating from '../components/Rating';
import Dropdown from '../components/Dropdown';
import { Redirect } from "react-router-dom";
import { getHousingData } from "../data/dataManager";

class Housing extends React.Component {

  render() {
    const data = getHousingData(this.props.match.params.id);
    if (data === null) return <Redirect to="/errorPage" />
    
    return (
      <main className="housing">
        <Carousel pictures={data.pictures} />
        <div className="housing__description">
          <Summary title={data.title} location={data.location} tags={data.tags} />
          <aside className="housing__aside">
            <Owner name={data.host.name} picture={data.host.picture} />
            <Rating rating={data.rating}/>
          </aside>
        </div>
        <div className="housing__dropdowns">
          <Dropdown type="text" name="Description" text={data.description} />
          <Dropdown type="list" name="Équipements" list={data.equipments} />
        </div>
      </main>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
}

export default Housing;
