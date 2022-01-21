import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import HeroTableRow from './HeroesTableRow';


export default class HeroList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      heroes: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/heroes/')
      .then(res => {
        this.setState({
          heroes: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.heroes.map((res, i) => {
      return <HeroTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Real Name</th>
            <th>Super power</th>
            <th>Description</th>
            <th>Catch phrase</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}