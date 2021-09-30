// { useEffect }
import React from 'react'
import './styles.css'
export default function LoadingComponent() {
    // useEffect(()=>{
    //     window.scrollTo(0, 0)
    // },[])

    return (
        <>
            <div id="loadingIndicator">
                <div class="loadingBar" id="loadingBar1"></div>
                <div class="loadingBar" id="loadingBar2"></div>
                <div class="loadingBar" id="loadingBar3"></div>
                <div class="loadingBar" id="loadingBar4"></div>
            </div>
        </>
    )
}
