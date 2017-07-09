import React from "react";

import styles from "./LayoutStyles.css";

export default ({
    children
}) => (
    <div className={styles.RectBoxInner}>
        {children}
    </div>
)