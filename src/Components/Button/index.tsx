import React, { Component } from 'react';

import { ButtonProps } from './interfaces';

import './Button.scss';

export default class Button extends Component<ButtonProps> {
  render() {
    return (
      <div
        className="button"
        onClick={this.props.onClick}
      >
        {this.props.text}
      </div>
    )
  }
}
