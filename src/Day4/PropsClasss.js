import React, { Component } from 'react'

export default class PropsClasss extends Component {
  render() {
    return (
      <div>
        <h1>
            Niku Niku Niku {this.props.place}
        </h1>
      </div>
    )
  }
}
