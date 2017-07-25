import React from "react";



import ContainerListRectItem from "../common/containers/ContainerListRectItem";
import SaveFormControl from "../common/form/SaveFormControl";

import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import FormControl from "react-bootstrap/lib/FormControl";

import RectBoxUnit from "../common/Layout/RectBoxUnit";



export default class EditComputer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ContainerListRectItem>
                    <SaveFormControl placeholder="Nimi" />
                    <h2>Tiedot</h2>
                    <div>
                        <RectBoxUnit>
                            <Row>
                                <Col xs={4}>
                                    <SaveFormControl placeholder="Avain" />
                                </Col>
                                <Col xs={4}>
                                    <SaveFormControl placeholder="Arvo" />
                                </Col>
                                <Col xs={1}>
                                    <Button bsStyle="danger">
                                        Poista
                                </Button>
                                </Col>
                            </Row>
                        </RectBoxUnit>
                        <RectBoxUnit>
                            <Row>
                                <Col xs={4}>
                                    <SaveFormControl placeholder="Avain" />
                                </Col>
                                <Col xs={4}>
                                    <SaveFormControl placeholder="Arvo" />
                                </Col>
                                <Col xs={1}>
                                    <Button bsStyle="success">
                                        Lisää
                                </Button>
                                </Col>
                            </Row>
                        </RectBoxUnit>
                    </div>
                    <h2>
                        Wol rajapinta
                    </h2>
                    <RectBoxUnit>
                        <FormControl componentClass="select" placeholder="select">
                            <option>eht0</option>
                            <option>eht1</option>
                            <option>eth2</option>
                        </FormControl>
                    </RectBoxUnit>
                    <SaveFormControl placeholder="mac" />
                    <h2>
                        Arttu
                    </h2>
                    <Button bsStyle="danger">
                        Poista tietokone
                    </Button>
                </ContainerListRectItem>
            </div>
        )
    }
}