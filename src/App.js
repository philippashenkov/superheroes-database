import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateHero from './components/create-hero.component'
import EditHero from './components/edit-hero.component'
import HeroesList from './components/hero-list.component'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/heroes-list'} className="nav-link">
                  Superheroes DataBase
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-hero'} className="nav-link">
                    Add new hero
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/heroes-list'} className="nav-link">
                  Heroes List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <HeroesList  {...props} />}
                  />
                  <Route
                    exact
                    path="/create-hero"
                    component={(props) => <CreateHero {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-hero/:id"
                    component={(props) => <EditHero {...props} />}
                  />
                  <Route
                    exact
                    path="/heroes-list"
                    component={(props) => <HeroesList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
