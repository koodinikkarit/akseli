import React from "react";

import ContainerListRectItem from "../common/containers/ContainerListRectItem";
import SaveFormControl from "../common/form/SaveFormControl";

export default class EditComputer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ContainerListRectItem>
                    <SaveFormControl placeholder="Nimi" />
                </ContainerListRectItem>
            </div>
        )
    }
}