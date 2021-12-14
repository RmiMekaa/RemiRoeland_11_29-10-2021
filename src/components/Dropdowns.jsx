import React from "react";
import PropTypes from 'prop-types';
import Dropdown from "./Dropdown";

class Dropdowns extends React.Component {

  render() {
    const { description, equipments } = this.props;
    return (
      <div className="dropdowns">
        <Dropdown type="text" name="Description" description={description} />
        <Dropdown type="list" name="Équipements" equipments={equipments} />
      </div>
    )
  }
}

Dropdowns.propTypes = {
  description: PropTypes.string.isRequired,
  equipments: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Dropdowns;