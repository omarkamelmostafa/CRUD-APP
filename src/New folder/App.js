import React, { Component } from 'react';
import Nav from './components/nav' ;
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/contact';
import About from './components/about';
class App extends Component {
  render(){   
    return (
      <BrowserRouter>
          <div className="App">
              <Nav />
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
