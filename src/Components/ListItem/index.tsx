import React, { Component } from 'react';

import { ListItemProps } from './interfaces';

import './ListItem.scss';

export default class ListItem extends Component<ListItemProps> {
  render() {
    const { phonenumber, color } = this.props;
    const itemStyle = {
      backgroundColor: color
    }
    return (
      <div
        className="listitem"
        style={itemStyle}
        >
        {phonenumber}
      </div>
    )
  }
}
