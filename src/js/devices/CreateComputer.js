import React from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Button from "react-bootstrap/lib/Button";

import {
    FieldGroup
} from "../form";


export class CreateComputer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mac: ""
        };
    }

    render() {
        return (
            <div>
                <FieldGroup label="Nimi" value={this.state.name}
                 onChange={value => this.setState({ name: value })} />
                <FieldGroup label="Mac" value={this.state.mac}
                 onChange={value => this.setState({ mac: value })} />
                <Button
                 onClick={e => {
                    if (this.props.onCancel) this.props.onCancel();
                 }}>
                    Peruuta
                </Button>
                <Button bsStyle="info" onClick={e => {
                    this.props.addComputer({
                        name: this.state.name,
                        mac: this.state.mac
                    }).then(data => {
                        if (this.props.onCreate) this.props.onCreate();
                    });
                }}>
                    Luo
                </Button>
            </div>
        )
    }
}

export default graphql(gql`
mutation addComputer($name: String, $mac: String) {
    addComputer(name: $name, mac: $mac) {
        id,
        name,
        mac
    }
}`, {
    props: ({ ownProps, mutate }) => ({
        addComputer({ name, mac }) {
            return mutate({
                variables: {
                    name,
                    mac
                }
            })
        }
    })
})(CreateComputer);
