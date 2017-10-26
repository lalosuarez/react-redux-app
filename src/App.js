import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting/Greeting';
import Header from './Header/Header'
import BookList from './Book/Containers/BookList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Greeting />
        <BookList />
      </div>
    );
  }
}

export default App;
