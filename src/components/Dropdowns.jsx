import React from "react";
import PropTypes from 'prop-types';
import Dropdown from "./Dropdown";

class Dropdowns extends React.Component {

  render() {
    return (
      <div className="dropdowns">
        <Dropdown type="text" name="Description" text={this.props.description} />
        <Dropdown type="list" name="Équipements" list={this.props.equipments} />
      </div>
    )
  }
}

Dropdowns.propTypes = {
  description: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Dropdowns;