import React from "react";
import {
	Route,
	Switch
} from "react-router-dom";

import Grid from "react-bootstrap/lib/Grid";

import CreateWolDevicePage from "./pages/CreateWolDevicePage";
import EditWolDevicePage from "./pages/EditWoldevicePage";
import WolDevicesPage from "./pages/WolDevicesPage";
import NotFoundPage from "./pages/NotFoundPage";

export default class Routes extends React.Component {
	render() {
		return (
			<Grid>
				<Switch>
					<Route path="/createwoldevice" component={CreateWolDevicePage} />
					<Route path="/editwoldevice/:wolInterfaceId" component={EditWolDevicePage} />
					<Route path="/woldevices" component={WolDevicesPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</Grid>
		);
	}
}