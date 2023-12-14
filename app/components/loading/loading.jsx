
// function ImageLoading() {
//     return (
//         <div data-tes-id=' LOADING'>
//         </div>
//     )
// 

// export default ImageLoading

import React from 'react'
import style from "./loading.module.css"

function ImageLoading() {
    return (
        <div id={style.containerImgLoading}>
                <img id={style.image} src='/loadingArte.gif' alt="Loading Image" />
        </div>
    )
}

export default ImageLoading