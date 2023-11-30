import React from 'react'
import styles from './loading.module.css'

function Loading() {
    return (
        <div id={styles.containerImgLoading}>
                <img id={styles.image} src='/steamuserimages-a.akamaihd.gif' alt="Loading Image" />
        </div>
    )
}

export default ImageLoading