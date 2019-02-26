// Code Product Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div className = 'product'>
        <h2>{this.props.name}</h2>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark?: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
      )
  }
};

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: propTypes.string.isRequired,
  
};