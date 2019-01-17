import React, { Component } from 'react';

import Button from '../Components/Button';
import ListItem from '../Components/ListItem';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header" >
          <span className="app-header__title">Random Phones</span>
          <span className="app-header__description">
            This application allows it users to generate random phone numbers, these phonenumbers can
            be downloaded. Note, the numbers you download unique to the session you visit the app and 
            sorted in descending order, PS: With great power...
          </span>
          <div className="app-header__actions">
            <Button
              onClick={() => {}}
              text="Generate"
            />
            <Button
              onClick={() => {}}
              text="Download"
            />
          </div>
        </div>
        <div className="app-container">
          <ListItem
            phonenumber="0724820290"
          />
        </div>
      </div>
    );
  }
}

export default App;
