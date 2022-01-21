import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateHero extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeHeroName = this.onChangeHeroName.bind(this);
    this.onChangeHeroRealname = this.onChangeHeroRealname.bind(this);
    this.onChangeHeroRollno = this.onChangeHeroRollno.bind(this);
    this.onChangeHeroCatchphrase = this.onChangeHeroCatchphrase.bind(this);
    this.onChangeHeroSuperpower = this.onChangeHeroSuperpower.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      realname: '',
      rollno: '',
      catchphrase: '',
       superpower: ''
    }
  }

  onChangeHeroName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeHeroRealname(e) {
    this.setState({ realname: e.target.value })
  }

  onChangeHeroRollno(e) {
    this.setState({ rollno: e.target.value })
  }

  onChangeHeroCatchphrase(e) {
    this.setState({ catchphrase: e.target.value })
  }

  onChangeHeroSuperpower(e) {
    this.setState({ superpower: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const heroObject = {
      name: this.state.name,
      realname: this.state.realname,
      rollno: this.state.rollno,
      catchphrase: this.state.catchphrase,
      superpower: this.state.superpower
    };
    axios.post('http://localhost:4000/heroes/create-hero', heroObject)
      .then(res => console.log(res.data));

    this.setState({ name: '', realname: '', rollno: '', catchphrase: '', superpower: ''})
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeHeroName} />
        </Form.Group>

        <Form.Group controlId="Real name">
          <Form.Label>Real name</Form.Label>
          <Form.Control type="text" value={this.state.realname} onChange={this.onChangeHeroRealname} />
        </Form.Group>

        <Form.Group controlId="Superpower">
          <Form.Label>Superpower</Form.Label>
          <Form.Control type="text" value={this.state.superpower} onChange={this.onChangeHeroSuperpower} />
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeHeroRollno} />
        </Form.Group>

        <Form.Group controlId="Catchphrase">
          <Form.Label>Catch phrase</Form.Label>
          <Form.Control type="text" value={this.state.catchphrase} onChange={this.onChangeHeroCatchphrase} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Hero
        </Button>
      </Form>
    </div>);
  }
}