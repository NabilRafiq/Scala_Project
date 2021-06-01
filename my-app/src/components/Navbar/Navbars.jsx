import { Switch, Route, Link } from 'react-router-dom';
import {React,Component} from 'react';
import MediaGallery from '../MediaGallery/MediaGallery';
import AboutUs from '../AboutUs/AboutUs';
import { Button, Navbar, Form, FormControl,Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import App from '../../App';

class Navbars extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar>
            <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <NavItem eventkey={1} href="/">
                  <Nav.Link as={Link} to="/" >Home</Nav.Link>
                </NavItem>
              </Nav>
              <Nav className="mr-auto">
                <NavItem eventkey={2} href="/MediaGallery">
                  <Nav.Link as={Link} to="/MediaGallery" >MediaGallery</Nav.Link>
                </NavItem>
              </Nav>
              <Nav className="mr-auto">
                <NavItem eventkey={3} href="/AboutUs">
                  <Nav.Link as={Link} to="/AboutUs" >AboutUs</Nav.Link>
                </NavItem>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={App} />
            <Route render={function () {
              return <p>Not found</p>
            }} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default Navbars;