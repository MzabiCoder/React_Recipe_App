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
    details_id:35382
  }

 componentDidMount(){

 //this.getData()

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
    { /*<List recipes={this.state.recipes}/>*/} 
     <Detail  id={this.state.details_id} />
     </React.Fragment>
    );
  }
}

export default App;
