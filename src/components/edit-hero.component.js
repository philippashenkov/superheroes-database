import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class EditHero extends Component {

  constructor(props) {
    super(props)

    this.onChangeHeroName = this.onChangeHeroName.bind(this);
    this.onChangeHeroRealname = this.onChangeHeroRealname.bind(this);
    this.onChangeHeroRollno = this.onChangeHeroRollno.bind(this);
    this.onChangeHeroCatchphrase = this.onChangeHeroCatchphrase.bind(this);
    this.onChangeHeroSuperpower = this.onChangeHeroSuperpower.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      realname: '',
      rollno: '',
      catchphrase: '',
      superpower: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/heroes/edit-hero/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          realname: res.data.realname,
          rollno: res.data.rollno,
          catchphrase: res.data.catchphrase,
          superpower: res.data.superpower
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://localhost:4000/heroes/update-hero/' + this.props.match.params.id, heroObject)
      .then((res) => {
        console.log(res.data)
        console.log('heroes successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to heroes List 
    this.props.history.push('/heroes-list')
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

        <Form.Group controlId="Super power">
          <Form.Label>Super power</Form.Label>
          <Form.Control type="text" value={this.state.superpower} onChange={this.onChangeHeroSuperpower} />
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeHeroRollno} />
        </Form.Group>

        <Form.Group controlId="Catchphrase">
          <Form.Label>Catchphrase</Form.Label>
          <Form.Control type="text" value={this.state.catchphrase} onChange={this.onChangeHeroCatchphrase} />
        </Form.Group>


        <Button variant="danger" size="lg" block="block" type="submit">
          Update Hero
        </Button>
      </Form>
    </div>);
  }
}