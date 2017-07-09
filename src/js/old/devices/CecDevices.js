import React from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import {
	Layout
} from "../layout";

import ListGroup from "react-bootstrap/lib/ListGroup"
import ListGroupItem from "react-bootstrap/lib/ListGroupItem";
import Button from "react-bootstrap/lib/Button";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Collapse from "react-bootstrap/lib/Collapse";

import AddCecController from "./AddCecController";

export class CecDevices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			addingCecController: false
		}
    }

    render() {
        return (
			<Layout>
                {!this.state.addingCecController &&
                <Button bsStyle="info"
                 onClick={e => {
                     this.setState({
                         addingCecController: true
                     });
                 }}>
                    Luo
                </Button>}
                <Row>
					<Col sm={6}>
						<Collapse in={this.state.addingCecController}>
							<div>
								<AddCecController
								 onCancel={e => {
									 this.setState({
									 	addingCecController: false
									 });
								 }} 
								 onCreate={e => {
									 this.setState({
										 addingCecController: false
									 });
								 }}/>
							</div>
						</Collapse>
					</Col>
				</Row>
                <ListGroup>
                    {this.props.keijos && this.props.keijos.map(p => (
                        <ListGroupItem key={p.id} href={"./keijo/" + p.id}>
                            {p.name}
                        </ListGroupItem>
                    ))}
                </ListGroup>
			</Layout>
        )
    }
}

export default graphql(gql`
query {
    keijos: fetchKeijos {
        id,
        name
    }
}`, {
    props: ({ ownProps, data: { keijos, loading } }) => ({
        keijos,
        loading
    })
})(CecDevices);