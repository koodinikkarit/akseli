import React from "react";

import styles from "./LayoutStyles.css";

export default ({
    children 
}) => (
    <div className={styles.RectBoxUnit}>
        {children}
    </div>
)