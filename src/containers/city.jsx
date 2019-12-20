import React, { Component } from 'react';

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.index);
  }

  render() {
    return (
      <li className="list-group-item" onClick={this.handleClick}>
        {this.props.city.name}
      </li>
    );
  }
}

export default City;
