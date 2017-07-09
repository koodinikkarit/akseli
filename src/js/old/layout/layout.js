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
						<NavDropdown eventKey={1} title="Toimenpiteet">
							<MenuItem eventKey={1.1} href="/actions/cecactions">Cec laitteet</MenuItem>
							<MenuItem eventKey={1.1} href="/actions/wolactions">Wol devices</MenuItem>
						</NavDropdown>
						<NavItem eventKey={2} href="/executors">Suorittajat</NavItem>
						{/*<NavDropdown eventKey={3} title="Laitteet">
        					<MenuItem eventKey={3.1} href="/devices/CecDevices">Cec laitteet</MenuItem>
        					<MenuItem eventKey={3.2} href="/devices/TelnetDevices">Telnet laitteet</MenuItem>
							<MenuItem eventKey={3.3} href="/devices/WolDevices">Wol laitteet</MenuItem>
							<MenuItem eventKey={3.4} href="/devices/computers">Tietokoneet</MenuItem>
							<MenuItem eventKey={3.5} href="/devices/penttidevices">Pentit</MenuItem>
						</NavDropdown>*/}
						<NavDropdown eventKey={4} title="Ajastimet">
							<MenuItem eventKey={4.1} href="/timers/weeklytimers">Viikkoajastimet</MenuItem>
						</NavDropdown>
						<NavDropdown eventKey={5} title="Yhdistetyt laitteet">
							<MenuItem eventKey={5.1} href="/devices/arttudevices">Artut</MenuItem>
							<MenuItem eventKey={5.2} href="/devices/penttidevices">Pentit</MenuItem>
							<MenuItem eventKey={5.2} href="/devices/keijodevices">Keijot</MenuItem>
							<MenuItem eventKey={5.3} href="/devices/severit">Severit</MenuItem>
						</NavDropdown>
						<NavDropdown eventKey={6} title="Luodut laitteet">
							<MenuItem eventKey={6.1} href="/devices/computers">Tietokoneet</MenuItem>
							<MenuItem eventKey={6.2} href="/devices/devices">Laitteet</MenuItem>
						</NavDropdown>
						<NavDropdown eventKey={7} title="Asetukset">
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
