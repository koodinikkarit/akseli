import * as React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Query, graphql, ChildProps, MutationResult } from "react-apollo";
import { getPageViewerQuery, logoutMutation } from "./types";
import { PAGE_VIEWER_QUERY, LOGOUT_MUTATION } from "./servergql";
import { Button } from "react-bootstrap";
// import { Button } from "react-bootstrap/lib/InputGroup";

type InputProps = {};

interface IResponseProps extends getPageViewerQuery {}

interface INavigationBar extends ChildProps<InputProps, IResponseProps> {
	logout: () => Promise<MutationResult<logoutMutation>>;
}

const withLogout = graphql(LOGOUT_MUTATION, {
	name: "logout"
});

export const NavigationBar = withLogout((props2: INavigationBar) => (
	<Query query={PAGE_VIEWER_QUERY}>
		{props => {
			const data: getPageViewerQuery = props.data;
			// tslint:disable-next-line
			console.log("data", data);

			return (
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>Akseli</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<NavItem>Pikatoiminnot</NavItem>
					</Nav>
					<Nav>
						<NavItem>Pikatoiminto laitteet</NavItem>
					</Nav>
					{data.viewer &&
						!data.viewer.user && (
							<Nav pullRight={true}>
								<NavItem>Kirjaudu</NavItem>
							</Nav>
						)}

					{data.viewer &&
						data.viewer.user && (
							<Nav pullRight={true}>
								<NavItem>{data.viewer.user.userName}</NavItem>
							</Nav>
						)}

					{data.viewer &&
						data.viewer.user && (
							<Nav pullRight={true}>
								<NavItem
									style={{
										marginTop: "-7px",
										marginBottom: "-7px"
									}}
								>
									<Button
										onClick={() => {
											props2.logout();
										}}
									>
										Kirjaudu ulos
									</Button>
								</NavItem>
							</Nav>
						)}
				</Navbar>
			);
		}}
	</Query>
));
