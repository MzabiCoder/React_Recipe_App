import React, { Component } from 'react'
import Recipe from './Recipe'
import Search from './Search'

export default class List extends Component {
  render() {
    //console.log(this.props.recipes)
    const {recipes,handleDetails,handlechange,hundleSubmit,value}=this.props
   // const {handleDetails}=this.props

    return (

      <React.Fragment>
      <Search handlechange={handlechange} value={value} hundleSubmit={hundleSubmit} />
     <div className="container">
      <div className="row text-center my-5">
       <div className="col-10 mx-auto col-nd-6 text-center text-uppercase mb-3">
       <h1>Recies List</h1>
       </div>
       </div>
       </div>
  <div className="row p-4">
  {
     recipes.map(recipe=>{
   return  (  
    <Recipe key={recipe.recipe_id}  handleDetails={handleDetails} recipe={recipe}/> 
    )

    })
  }
  </div>
     
 
     
     
     
      </React.Fragment>
    )
  }
}
