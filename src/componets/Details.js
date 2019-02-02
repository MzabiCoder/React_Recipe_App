import React, { Component } from 'react'
import {recipe } from './tempDetails'
import {recipes} from './tempList'


export default class Details extends Component {
 state={
   recipe:recipe,
 }

 async componentDidMount() 
  {
     try {
      const data = await fetch(`https://www.food2fork.com/api/get?key=7a1b014f00c830e5a47cc53ee58e6a80&rId=${this.props.id}`)
      const jsonData=await data.json()
  
       this.setState({
         recipe:jsonData.recipe
       })
 
     
 
     }catch (error){
      console.log(error)
     }
   
   }

Details=id=>{
  console.log(id)
}




  render() {
 // console.log(this.state.recipe)

  const {ingredients,publisher,publisher_url,source_url,title,image_url}=this.state.recipe
    return (
     <React.Fragment>
     <div className="container">
     <div className="row">
     <div className="mx-auto col-md-6 my-5">
      <button className="btn btn-warning mb-2 text-capitalize">back to recipe list</button>
      <img src={image_url} className="d-block w-100 my-3" alt=""/>
     
     </div>

     <div className="mx-auto col-md-6 my-5">
      <h6 className="text-uppercase">{title}</h6>
      <h6 className="text-warning text-capitalize text-slanted"> Provided by : {publisher}</h6>
       <a href={publisher_url}
       target="_blank"
       rel="nooopener noreferrer"
       className="btn btn-primary mt-2 text-capitalize mr-3"
       >publisher webpage</a>

       <a href={source_url}
       target="_blank"
       rel="nooopener noreferrer"
       className="btn btn-success mt-2 text-capitalize"
       >recipe url</a>
       <ul className="list-group mt-4">
       <h2 className="my-4">Ingredents</h2>
        {
          ingredients.map((val,index)=>{
            return <li key={index} className="list-group-item my-2">{val}</li>
          })
        }
       </ul>


     </div>

     </div>
     </div>   

     </React.Fragment>
    )
  }
}
