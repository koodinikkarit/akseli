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
import EditComputer from "./Specific/EditComputer";

function com1() {
    return (
		<RectBoxUnit>
			<RectBox onClick={e => {
				console.log("CLiked");	
			}}>
				<RectBoxInner>
        			Tykityskone
				</RectBoxInner>
			</RectBox>
		</RectBoxUnit>
    )
}
function com2() {
    return (
		<RectBoxUnit>
			<RectBox>
        		<h1>com2</h1>
			</RectBox>
		</RectBoxUnit>
    )
}
function com3() {
    return (
		<RectBoxUnit>
			<RectBox>
        		<h1>com3</h1>
			</RectBox>
		</RectBoxUnit>
    )
}

console.log("computers", ComputerList)

export default (
	<div>
		<Grid>
			<Row>
				<Col md={6}>
					<Route path="/computer" component={EditComputer} />
				</Col>
				<Col md={6}>
					<Route path="/" component={com1} />
					<Route path="/" component={com2} />
					<Route path="/" component={com3} />
					<Route path="/computers" component={ComputerList} />
				</Col>
			</Row>
		</Grid>
	</div>
)
