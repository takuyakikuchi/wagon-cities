import React, { Component } from 'react';

import City from './city';

class CityList extends Component {
  renderList() {
    return this.props.cities.map((city, index) => {
      return (
        <City key={city.name} city={city} index={index} selectCity={this.props.selectCity} />
      );
    });
  }

  render() {
    return (
      <ul className="list-group cities">
        {this.renderList()}
      </ul>
    );
  }
}

export default CityList;
