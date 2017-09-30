import React from "react";
import {
	compose
} from "react-apollo";

import WakeupTable from "../wakeuptables/WakeupTable";

export class WakeupTablePage extends React.Component {
	render() {
		return (
			<WakeupTable />
		);
	}
}

export default compose(

)(WakeupTablePage);