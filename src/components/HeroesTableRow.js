import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

export default class HeroesTableRow extends Component {
  constructor(props) {
    super(props)
    this.deleteHero = this.deleteHero.bind(this)
  }

  deleteHero() {
    axios
      .delete(
        'http://localhost:4000/heroes/delete-hero/' + this.props.obj._id,
      )
      .then((res) => {
        console.log('Hero successfully deleted!')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <tr id= "table-wrap">
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.realname}</td>
        <td>{this.props.obj.superpower}</td>
        <td>{this.props.obj.rollno}</td>
        <td>{this.props.obj.catchphrase}</td>
        <td>
          <Link
            className="edit-link" path={"product/:id"}
            to={'/edit-hero/' + this.props.obj._id}
          >
            Edit
          </Link>
          <Button onClick={this.deleteHero} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    )
  }
}
