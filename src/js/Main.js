import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import NavDropdown from "react-bootstrap/lib/NavDropdown";
import MenuItem from "react-bootstrap/lib/MenuItem";
import Grid from "react-bootstrap/lib/Grid";

import routes from "./routes";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/">Akseli</Link>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav>
                            <NavDropdown eventKey={1} title="Laitteet">
                                <MenuItem eventKey={1.1} href="/devices/computers">Tietokoneet</MenuItem>
                                <MenuItem eventKey={1.2} href="/devices/devices">Laitteet</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={2} title="Asetukset">
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="/login">Kirjaudu</NavItem>
                        </Nav>
                    </Navbar>
                    {routes}
                </div>
            </Router>
        )
    }
}