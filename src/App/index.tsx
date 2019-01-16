import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header" >
          <h2 className="app-header__title">Random Phones</h2>
          <p className="app-header__description">
            This application allows it users to generate random phone numbers, these phonenumbers can
            be downloaded. Note, the numbers you download unique to the session you visit the app and 
            sorted in descending order, PS: With great power...
          </p>
        </div>
      </div>
    );
  }
}

export default App;
