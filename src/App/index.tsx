import React, { Component } from 'react';
import Workbook from 'react-excel-workbook'

import Button from '../Components/Button';
import ListItem from '../Components/ListItem';

import { AppState } from './interface';

import './App.scss';

class App extends Component<{}, AppState> {

  state =  {
    phonenumbers: []
  }

  componentDidMount() {
    this.generateRandomNumbers()
  }
  

  generateRandomNumbers = () => {
    let phoneNumbers: Set<string> = new Set();
    while(phoneNumbers.size < 10000) {
      const number = `07${Math.ceil(Math.random()*100000000)}`;
      if (number.length === 9) {
        phoneNumbers.add(number);
      }
    };

    const result = Array.from(phoneNumbers).sort((first, second) => (
      Number(first) < Number(second) ? 1 : -1
    ));

    this.setState({
      phonenumbers: result,
    });
  }

  render() {
    const { phonenumbers } = this.state;
    const fileData = phonenumbers.map((phonenumber) => ({ Phonenumbers: phonenumber }));
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
              onClick={() => this.generateRandomNumbers()}
              text="Generate"
            />
            
            <Workbook filename="phonenumbers.xlsx" element={
              <Button
                onClick={() => {}}
                text="Download"
              />
            }>
              <Workbook.Sheet data={fileData} name="Phonenumbers">
                <Workbook.Column label="Phonenumbers" value="Phonenumbers"/>
              </Workbook.Sheet>
            </Workbook>
          </div>
        </div>
        <div className="app-container">
          {
            phonenumbers.map((phonenumber, index) => (
              <ListItem
                key={index}
                phonenumber={phonenumber}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
