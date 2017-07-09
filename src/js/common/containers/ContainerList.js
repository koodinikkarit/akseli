import React from "react";

import styles from "./ContainerStyles.css";

export default ({
    children
}) => (
    <ul className={styles.ContainerList}>
        {children}
    </ul>
)