import React, { Component } from 'react';
import Greeting from './Greeting/Greeting';
import Header from './Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Greeting />
      </div>
    );
  }
}

export default App;
