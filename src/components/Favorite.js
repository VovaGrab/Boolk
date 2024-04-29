import React, { Component } from 'react'
import { TiDelete } from "react-icons/ti";

export class Favorite extends Component {
  render() {
    return (
      <div className='item'>
         <img src={"./img/"+ this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <b>Prize: {this.props.item.prize}</b>
        <TiDelete className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }
}

export default Favorite