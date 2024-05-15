import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'it',
                    name: 'IT'
                },
                {
                    key: 'business',
                    name: 'Business'
                },
                {
                    key: 'science',
                    name: 'Science'
                },
                {
                    key: 'art',
                    name: 'Art'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories