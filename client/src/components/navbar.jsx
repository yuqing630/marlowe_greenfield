import React from 'react';
import axios from 'axios';
import {Nav, Navbar, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';


class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Our Fantastical Greenfield Project</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Recent Posts
          </NavItem>
          <NavItem eventKey={2} href="#">
            Your Claim Posts
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
          Log Out
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default NavigationBar;
