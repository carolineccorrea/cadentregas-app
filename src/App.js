import React, { Component } from 'react';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';

class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <Header/>
        <Routes/>
      </BrowserRouter>
    )
  }

}

export default App;
