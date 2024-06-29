import React, { Component } from 'react'
import loading from './loader.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className='spinner d-flex align-items-center justify-content-center'>
        <img src={loading} alt="loading" height="80" width="auto"/>
      </div>
    )
  }
}
