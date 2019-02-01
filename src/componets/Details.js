import React, { Component } from 'react'
import {recipe } from './tempDetails'
import {recipes} from './tempList'


export default class Details extends Component {
 state={
   recipe:recipe,
   url:`https://www.food2fork.com/api/get?key=7a1b014f00c830e5a47cc53ee58e6a80&rId=${this.props.id}`
 }

  render() {
  console.log(this.state.recipe)
    return (
     <React.Fragment>
     <h1>hellow from details</h1>
     </React.Fragment>
    )
  }
}
