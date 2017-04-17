import React from "react";

import FormGroup from "react-bootstrap/lib/FormGroup";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import FormControl from "react-bootstrap/lib/FormControl";
import HelpBlock from "react-bootstrap/lib/HelpBlock";
import Button from "react-bootstrap/lib/Button";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default class CreateWolDevices extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <FieldGroup label="Nimi" />
                <FieldGroup label="Ip" />
                <FieldGroup label="Mac" />
                <Button
                 onClick={e => {
                    if (this.props.onCancel) this.props.onCancel();
                 }}>
                    Peruuta
                </Button>
                <Button bsStyle="info">
                    Luo
                </Button>
            </div>
        )
    }
}
