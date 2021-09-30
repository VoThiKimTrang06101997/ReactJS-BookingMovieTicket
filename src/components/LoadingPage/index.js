import React from 'react'
import './style.css'
export default function LoadingPage() {
    return (
        <div id="fullScreen">
            <div id="circle_container">
                <div id="stars"></div>
                <div id="load_wrapper">
                    <div id="sun"></div>
                    <div id="moon"></div>
                </div>
            </div>
        </div>
    )
}
