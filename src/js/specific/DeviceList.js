import React from "react";

import { Link } from 'react-router-dom'

import ContainerList from "../common/containers/ContainerList";
import ContainerListRectItem from "../common/containers/ContainerListRectItem";

export default class DeviceList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ContainerList>
				<ContainerListRectItem>
					<Link to="device">
                        Tykki
                    </Link>
				</ContainerListRectItem>
			</ContainerList>
		)
	}
}