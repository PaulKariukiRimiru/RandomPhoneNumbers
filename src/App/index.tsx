import React, { Component } from 'react';
import Workbook from 'react-excel-workbook'

import Button from '../Components/Button';
import ListItem from '../Components/ListItem';

import { AppState, SortType } from './interface';

import './App.scss';

class App extends Component<{}, AppState> {

  state =  {
    phonenumbers: [1],

  }

  componentDidMount() {
    this.generateRandomNumbers()
  }
  
  sort = (sortType: SortType, phoneNumbers: Number[] | Set<Number>) => {
    let result;

    if (sortType === SortType.ascending) {
      result = Array.from(phoneNumbers).sort((first, second) => (
        Number(first) < Number(second) ? 1 : -1
      )).map(Number);
    } else {
      result = Array.from(phoneNumbers).sort((first, second) => (
        Number(first) < Number(second) ? -1 : 1
      )).map(Number);
    }

    this.setState({
      phonenumbers: result,
    });
  }

  generateRandomNumbers = () => {
    let phoneNumbers: Set<number> = new Set();
    while(phoneNumbers.size < 10000) {
      const number = `07${Math.ceil(Math.random()*100000000)}`;
      if (number.length === 9) {
        phoneNumbers.add(Number(number));
      }
    };

    this.sort(SortType.ascending, phoneNumbers)
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
          <span className="app-header__description">{`Minimum phonenumber: 0${Math.min.apply(null, phonenumbers)}`}</span>
          <span className="app-header__description">{`Maximum phonenumber: 0${Math.max.apply(null, phonenumbers)}`}</span>
          <div className="app-header__actions">
            <Button
              onClick={() => this.sort(SortType.ascending, phonenumbers)}
              text="Sort Ascending"
            />
            <Button
              onClick={() => this.sort(SortType.descending, phonenumbers)}
              text="Sort Descending"
            />
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
