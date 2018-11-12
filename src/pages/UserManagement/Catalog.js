import React, { Component } from 'react';
import Item from './Item.js';

export default class Catalog extends Component {
  render() {
    const { items } = this.props;
    const catalogItems = items.items ? items.items : items; 

    return (
      <div className="item-catalog">
        {catalogItems && catalogItems.map((item, i) => (
          <Item 
            {...item}
            key={i}
          />
        ))}
      </div>
    )
  }
}