import React from "react";
import {
	compose
} from "react-apollo";

import {
	RectBoxInner,
	//AppendBottom
} from "../common/layout";

import DelayTextInput from "../common/DelayTextInput";
import WolInterfacesSearchResults from "./WolInterfacesSearchResults";

export class WolInterfacesSearch extends React.Component {
	render() {
		return (
			<RectBoxInner>
				{/*<AppendBottom>
					<DelayTextInput />
				</AppendBottom>*/}
				<WolInterfacesSearchResults
					getItemLink={this.props.getItemLink} />
			</RectBoxInner>
		);
	}
}

export default compose(

)(WolInterfacesSearch);