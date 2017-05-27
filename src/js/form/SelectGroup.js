import React from "react";
import FormGroup from "react-bootstrap/lib/FormGroup";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import FormControl from "react-bootstrap/lib/FormControl";


export default class extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<FormGroup controlId="formControlsSelect">
				<ControlLabel>Select</ControlLabel>
				<FormControl componentClass="select" placeholder="select">
					{this.props.children}
				</FormControl>
			</FormGroup>
		)
	}
}