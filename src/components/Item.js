import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/"+ this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>Prize: {this.props.item.prize}</b>
        <div className='participate' onClick={() => this.props.onAdd(this.props.item)}>Favorite</div>

      </div>
    )
  }
}

export default Item