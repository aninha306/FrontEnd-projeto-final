import React from "react";
import styles from "./loading.module.css"

function LoadingArte() {
  return (
      <div className={styles.maingifLoading}>
        <img className={styles.gifLoading} src="/assets/loading.gif" alt="Loading gif" width={300} height={300}/>
      </div>
  )
}
export default LoadingArte;