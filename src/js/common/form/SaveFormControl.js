import React from "react";

import FormControl from "react-bootstrap/lib/FormControl";

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value ? this.props.value : "",
			timer: null,
			focus: false
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.value && !this.state.focus) {
			this.setState({
				value: nextProps.value
			});
		}
	}

	render() {
		return (
			<FormControl
				value={this.state.value}
				placeholder={this.props.placeholder}
				onChange={e => {
					this.setState({
						value: e.target.value
					});
					if (this.props.onChange) {
						clearTimeout(this.state.timer);
						this.state.timer = setTimeout(() => {
							if (this.props.onChange) this.props.onChange(this.state.value);
						}, 500);
					}
				}}
				onFocus={e => {
					this.setState({ focus: true });
				}}
				onBlur={e => {
					this.setState({ focus: false });
					if (this.props.onChange && this.state.value !== this.props.value) {
						clearTimeout(this.state.timer);
						this.props.onChange(this.state.value);
					}
				}}
				onKeyPress={e => {
					if (e.key === "Enter") {
						clearTimeout(this.state.timer);
						this.props.onChange(this.state.value);
					}
				}} />
		);
	}
}