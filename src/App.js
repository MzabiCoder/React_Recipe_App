import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Recipe from './componets/Recipe'
import {recipes} from './componets/tempList'
import List from './componets/List'
import Detail from './componets/Details'




class App extends Component {
  state={
    recipes:recipes,
    url:'https://www.food2fork.com/api/search?key=7a1b014f00c830e5a47cc53ee58e6a80&q=chicken%20breast&page=2 ',
    details_id:35389,
    pageN:1
  }



  display=(index)=>{
    switch(index){
      default:
      case 1:
      return (<List handleIndex={this.handleDetails} recipes={this.state.recipes}/> )
      case 0:
      return ( <Detail  handleIndex={this.handleIndex} id={this.state.details_id} />)
    }
  }

  handleIndex=index=>{
    this.setState({
      pageN:index
    })
  }

  handleDetails=(id,index)=>{
     console.log(id,index)
    this.setState({
      pageN:index,
      details_id:id

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
