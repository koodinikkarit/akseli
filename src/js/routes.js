import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {
	Devices,
	CecDevices,
	TelnetDevices,
	WolDevices
} from "./devices";

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
		path: "/controldevices/pentit",
		component: Pentit
	},
	{
		path: "/devices/CecDevices",
		component: CecDevices
	},
	{
		path: "/devices/TelnetDevices",
		component: TelnetDevices
	},
	{
		path: "/devices/WolDevices",
		component: WolDevices
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