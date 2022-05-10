import React, { Component } from 'react'

export class Navbar extends Component {

  static defaultProps = {
    title :'Github Finder',
    icon:'fab fa-github'
  }

  render() {
    return (
      <nav className='nav bg-secondary'>
          <h2>
          <i className={this.props.icon}/>{this.props.title}
          </h2>
      </nav>
    )
  }
}

export default Navbar