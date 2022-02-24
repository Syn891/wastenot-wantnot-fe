import React from 'react'
import css from "./dashBoardItem.module.css"
import image from "../img/Recycle-icon.png"

const DashboardItem = ({onClick, text}) => {
    return (
        <div>
            <button onClick={onClick}> <img src={image} /></button>
            {text}
        </div>
    )
}

export default DashboardItem