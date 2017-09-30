import React from "react";
import {
	Route,
	Switch
} from "react-router-dom";

import Grid from "react-bootstrap/lib/Grid";

import CreateComputerPage from "./pages/CreateComputerPage";
import UpdateComputerPage from "./pages/UpdateComputerPage";
import ComputersSearchPage from "./pages/ComputersSearchPage";

import CreateWolDevicePage from "./pages/CreateWolDevicePage";
import UpdateWolInterfacePage from "./pages/UpdateWolInterfacePage";
import WolInterfacesPage from "./pages/WolInterfacesPage";

import WakeupTablePage from "./pages/WakeupTablePage";

import NotFoundPage from "./pages/NotFoundPage";

export default class Routes extends React.Component {
	render() {
		return (
			<Grid>
				<Switch>
					<Route path="/createcomputer" component={CreateComputerPage} />
					<Route path="/updatecomputer/:computerId" component={UpdateComputerPage} />
					<Route path="/computers" component={ComputersSearchPage} />
					<Route path="/createwoldevice" component={CreateWolDevicePage} />
					<Route path="/updatewolinterface/:wolInterfaceId" component={UpdateWolInterfacePage} />
					<Route path="/wolinterfaces" component={WolInterfacesPage} />
					<Route path="/wakeuptable" component={WakeupTablePage} />
					<Route component={NotFoundPage} />
				</Switch>
			</Grid>
		);
	}
}