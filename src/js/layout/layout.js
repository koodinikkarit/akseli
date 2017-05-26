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
						<NavDropdown eventKey={3} title="Hallintalaitteet">
							<MenuItem eventKey={3.1} href="/controldevices/pentit">Pentit</MenuItem>
						</NavDropdown>
						<NavDropdown eventKey={2} title="Laitteet">
        					<MenuItem eventKey={2.1} href="/devices/CecDevices">Cec laitteet</MenuItem>
        					<MenuItem eventKey={2.2} href="/devices/TelnetDevices">Telnet laitteet</MenuItem>
							<MenuItem eventKey={2.3} href="/devices/WolDevices">Wol laitteet</MenuItem>
							<MenuItem eventKey={2.4} href="/devices/computers">Tietokoneet</MenuItem>
						</NavDropdown>
						<NavDropdown eventKey={3} title="Ajastimet">
							<MenuItem eventKey={3.1} href="/timers/weeklytimers">Viikkoajastimet</MenuItem>
						</NavDropdown>
					</Nav>
					<Nav pullRight>
        				<NavItem eventKey={1} href="/login">Kirjaudu</NavItem>
      				</Nav>
				</Navbar>
				<div className="container-fluid">
					{this.props.children}
				</div>
			</div>
		)
	}
}
