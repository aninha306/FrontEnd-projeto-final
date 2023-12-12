import React from "react";
import styles from "./loading.module.css"

function ArteLoading(){
    return(
        <div className={styles.maingifLoading}>
            <img className={styles.gifLoading} src="/loadingArte.gif" alt="Loading gif"/>
        </div>
    )
}
export default ArteLoading;