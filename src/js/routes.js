import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import RectBox from "./common/layout/RectBox";
import RectBoxUnit from "./common/Layout/RectBoxUnit";
import RectBoxInner from "./common/Layout/RectBoxInner";

import ContainerList from "./common/containers/ContainerList";
import ContainerListRectItem from "./common/containers/ContainerListRectItem";

import ComputerList from "./specific/ComputerList";
import CreateComputer from "./specific/CreateComputer";
import EditComputer from "./Specific/EditComputer";

import DeviceList from "./specific/DeviceList";
import EditDevice from "./specific/EditDevice";

console.log("computers", ComputerList)

export default (
	<div>
		<Grid>
			<Route path="/editcomputer" component={() => (
				<Row>
					<Col md={6}>
						<EditComputer />
					</Col>
					<Col md={6}>
						<ComputerList />
					</Col>
				</Row>
			)} />
			<Route path="/createcomputer" component={() => (
				<Row>
					<Col md={6}>
						<CreateComputer />
					</Col>
					<Col md={6}>
						<ComputerList />
					</Col>
				</Row>
			)} />
			<Route path="/computers" component={ComputerList} />
			<Route path="/device" component={() => (
				<Row>
					<Col md={6}>
						<EditDevice />
					</Col>
					<Col md={6}>
						<DeviceList />
					</Col>
				</Row>
			)} />
			<Route path="/devices" component={DeviceList} />
		</Grid>
	</div>
)
