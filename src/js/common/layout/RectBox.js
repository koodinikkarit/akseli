import React from "react";

import styles from "./LayoutStyles.css";

export default ({
    children,
    onClick
}) => (
    <div className={styles.RectBox}
        onClick={onClick}>
        {children}
    </div>
)