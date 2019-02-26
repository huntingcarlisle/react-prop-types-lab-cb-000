// Code Product Component Here
import React from 'react'
import ReactDOM from 'react-dom'

export default class Product extends React.Component {
  render() {
    return (
      <div className = 'product'>
        <h2>{this.props.name}</h2>
        
      </div>
      
      )
  }
}