import React, { Component } from 'react'
import Recipe from './Recipe'
import Search from './Search'

export default class List extends Component {
  render() {
    return (
      <React.Fragment>
      <h1>hellow from List</h1>
      <Search/>
      <Recipe />
      </React.Fragment>
    )
  }
}
