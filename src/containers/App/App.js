import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from '../../components/header';
import Routes from '../Routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
