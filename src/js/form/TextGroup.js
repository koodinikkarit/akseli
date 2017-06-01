import React from "react";
import FormGroup from "react-bootstrap/lib/FormGroup";
import ControlLabel from "react-bootstrap/lib/ControlLabel";


export default function TextGroup({ label, text}) {
	return (
		<FormGroup>
			<ControlLabel>{label}</ControlLabel>
			<ControlLabel>{text}</ControlLabel>
		</FormGroup>
	)
}