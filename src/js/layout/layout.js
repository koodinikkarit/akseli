import React from "react";
import {
  Link
} from 'react-router-dom'

import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import NavDropdown from "react-bootstrap/lib/NavDropdown";
import MenuItem from "react-bootstrap/lib/MenuItem";

export default class AkseliLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

	render() {
		return (
			<div>
				<Navbar>
					<Navbar.Header>
      					<Navbar.Brand>
        					<Link to="/">Akseli</Link>
      					</Navbar.Brand>
    				</Navbar.Header>
					<Nav>
						<NavItem active={true} eventKey={1} href="/controldevices">Hallintalaitteet</NavItem>
						<NavDropdown eventKey={2} title="Laitteet" id="basic-nav-dropdown">
        					<MenuItem eventKey={2.1}>Cec laitteet</MenuItem>
        					<MenuItem eventKey={2.2}>Telnet laitteet</MenuItem>
							<MenuItem eventKey={2.3}>Wol laitteet</MenuItem>
						</NavDropdown>
     					<NavItem eventKey={3} href="/timers">Ajastimet</NavItem>
					</Nav>
					<Nav pullRight>
        				<NavItem eventKey={1} href="/login">Kirjaudu</NavItem>
      				</Nav>
				</Navbar>
			</div>
		)
	}
}
