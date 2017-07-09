import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {
	CecActions,
	WolActions
} from "./actions";

import {
	ExecutorsList,
	Executor
} from "./executor";

import {
	Devices,
	CecDevices,
	TelnetDevices,
	Computer,
	Keijo,
	PenttiDevices,
	PenttiDevice
} from "./devices";

import {
	ArttuDevicesList,
	KeijoDevicesList,
	PenttiDevicesList,
	SeveriDevicesList
} from "./ConnectedDevices"

import {
	ComputersList,
	DevicesList
} from "./CreatedDevices";

import {
	FrontPage
} from "./frontpage";

import {
	Timers,
	WeeklyTimers
} from "./timers";


import {
	ControlDevices,
	Pentit
} from "./controldevices";

// Route config
const routes = [
	{
		path: "/",
		exact: true,
		component: FrontPage,
	},
	{
		path: "/actions/cecactions",
		component: CecActions
	},
	{
		path: "/actions/wolactions",
		component: WolActions
	},
	{
		path: "/controldevices/pentit",
		component: Pentit
	},
	{
		path: "/executors",
		component: ExecutorsList
	},
	{
		path: "/executor",
		component: Executor
	},
	{
		path: "/devices/CecDevices",
		component: CecDevices
	},
	{
		path: "/devices/keijo/:id",
		component: Keijo
	},
	{
		path: "/devices/TelnetDevices",
		component: TelnetDevices
	},
	{
		path: "/devices/computers",
		component: ComputersList
	},
	{
		path: "/devices/devices",
		component: DevicesList
	},
	{
		path: "/devices/computer/:id",
		component: Computer
	},
	{
		path: "/devices/penttidevices",
		component: PenttiDevices
	},
	{
		path: "/devices/arttudevices",
		component: ArttuDevicesList
	},
	{
		path: "/devices/penttidevices",
		component: PenttiDevicesList
	},
	{
		path: "/devices/keijodevices",
		component: KeijoDevicesList
	},
	{
		path: "/devices/severidevices",
		component: SeveriDevicesList
	},
	{
		path: "/devices/penttidevice/:id",
		component: PenttiDevice
	},
	{
		path: "/timers/weeklytimers",
		component: Timers
	},
	{
		path: "/controldevices",
		component: ControlDevices
	}
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route exact path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

export default (
	<Router>
		<div>
			{routes.map((route, i) => (
        		<RouteWithSubRoutes key={i} {...route}/>
    		))}
		</div>
	</Router>
)