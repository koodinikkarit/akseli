import React from "react";
import {
	compose
} from "react-apollo";

import {
	RectBoxInner,
	//AppendBottom
} from "../common/layout";

import ComputersSearchResults from "./ComputersSearchResults";


export class ComputersSearch extends React.Component {
	render() {
		return (
			<RectBoxInner>
				<ComputersSearchResults
					getItemLink={this.props.getItemLink} />
			</RectBoxInner>
		);
	}
}

export default compose(

)(ComputersSearch);