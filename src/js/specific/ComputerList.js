import React from "react";

import ContainerList from "../common/containers/ContainerList";
import ContainerListRectItem from "../common/containers/ContainerListRectItem";

export default class ComputerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }
    
    render() {
        return (
            <ContainerList>
                <ContainerListRectItem
                    onClick={e => {
                        this.setState({
                            expanded: !this.state.expanded
                        });
                    }}
                    expanded={this.state.expanded}>
                    Tietokone
                    {this.state.expanded &&
                    <div>
                        <h1>One</h1>
                        <h1>Two</h1>
                        <h1>Three</h1>
                        <h1>Four</h1>
                        <h1>Five</h1>
                    </div>}
                </ContainerListRectItem>
            </ContainerList>
        )
    }
}