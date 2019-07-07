import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//import Recipe from './componets/Recipe'
import {recipes} from './componets/tempList'
import List from './componets/List'
import Details from './componets/Details'




class App extends Component {
  state={
    recipes:recipes,
    url:'https://www.food2fork.com/api/search?key=7a1b014f00c830e5a47cc53ee58e6a80&q=chicken%20breast&page=2 ',
    details_id:35389,
    pageN:1,
    search:'',
    base_url:'https://www.food2fork.com/api/search?key=7a1b014f00c830e5a47cc53ee58e6a80&q=chicken%20breast&page=2',
    query:'&q='
  }



  display=(index)=>{
    switch(index){
      default:
      case 1:
      return (<List handlechange={this.handlechange} hundleSubmit={this.hundleSubmit} handleDetails={this.handleDetails}  recipes={this.state.recipes} value={this.state.search}/> )
      case 0:
      return ( <Details  handleIndex={this.handleIndex}  id={this.state.details_id} />)
    }
  }

  handleIndex=index=>{
    this.setState({
      pageN:index
    })
  }

  handleDetails=(id,index)=>{
    // console.log(id,index)
    this.setState({
      pageN:index,
      details_id:id

    })
  }

  handlechange=e=>{
    //console.log('hellow from handle change')

    this.setState({
      search:e.target.value
    },()=>{
     // console.log(this.state.search)
    })
  }
  hundleSubmit=e=>{
    e.preventDefault()
 //  console.log('form submitted')

 const {base_url,query,search}=this.state
 
  this.setState({
    url:`${base_url}${query}${search}`,
    search:''
  },()=>{
   

  })

  }

 componentDidMount(){

 this.getData()

  }

  async getData(){

    try {
     const data = await fetch(this.state.url)
     const jsonData=await data.json()
 
      this.setState({
        recipes:jsonData.recipes
      })

    

    }catch (error){
     console.log(error)
    }
  
  }


  render() {
    //console.log(this.state.recipes)
    return (
     <React.Fragment>
    
      {this.display(this.state.pageN)}
    
     </React.Fragment>
    );
  }
}

export default App;
