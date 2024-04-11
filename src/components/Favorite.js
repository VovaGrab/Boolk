import React, { Component } from 'react'

export class Favorite extends Component {
  render() {
    return (
      <div className='item'>
         <img src={"./img/"+ this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <b>Prize: {this.props.item.prize}</b>
      </div>
    )
  }
}

export default Favorite