import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from '../../components/header';
import Routes from '../Routes';
import Footer from '../../components/footer';

class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className="App">
          <Header />
          <Routes />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
