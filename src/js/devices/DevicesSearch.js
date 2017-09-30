import React from "react";
import {
	compose
} from "react-apollo";

import {
	RectBoxInner
} from "../common/layout";

import DevicesSearchResults from "./DevicesSearchResults";

export class DevicesSearch extends React.Component {
	render() {
		return (
			<RectBoxInner>
				<DevicesSearchResults />
			</RectBoxInner>
		);
	}
}

export default compose(

)(DevicesSearch);