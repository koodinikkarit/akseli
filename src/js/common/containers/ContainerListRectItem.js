import React from "react";

import RectBox from "../layout/RectBox";
import RectBoxUnit from "../Layout/RectBoxUnit";
import RectBoxInner from "../Layout/RectBoxInner";
import Collapse from "react-bootstrap/lib/Collapse";

import styles from "./ContainerStyles.css";


export default ({
    children,
    onClick,
	expanded
}) => (
    <li className={styles.ContainerListRectItem}
        onClick={onClick}>
        <Collapse in={expanded}>
        	<RectBoxUnit>
            	<RectBox>
                    <RectBoxInner>
                        {children}
                    </RectBoxInner>
                </RectBox>
            </RectBoxUnit>
        </Collapse>
    </li>
)