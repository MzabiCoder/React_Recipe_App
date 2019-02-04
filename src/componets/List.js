import React, { Component } from 'react'
import Recipe from './Recipe'
import Search from './Search'

export default class List extends Component {
  render() {
    //console.log(this.props.recipes)
    const {handleIndex,recipes}=this.props
    return (

      <React.Fragment>
      <h1>hellow from List</h1>
      <Search />

      <div className="container">
      <div className="row text-center my-5">
       <div className="col-10 mx-auto col-nd-6 text-center text-uppercase mb-3">
       <h1>Recies List</h1>
       </div>
       </div>
       </div>
  <div className="row text-center p-4">
  {
     recipes.map(recipe=>{
   return  (  
    <Recipe key={recipe.recipe_id} handleIndex={handleIndex} recipe={recipe}/> 
    )

    })
  }
  </div>
     
 
     
     
     
      </React.Fragment>
    )
  }
}
