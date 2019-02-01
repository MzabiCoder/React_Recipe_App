import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Recipe from './componets/Recipe'
import {recipes} from './componets/tempDetails'
import List from './componets/List'
import Detail from './componets/Details'

class App extends Component {
  render() {
    return (
     <React.Fragment>
     <List/>
     <Detail/>
     </React.Fragment>
    );
  }
}

export default App;
