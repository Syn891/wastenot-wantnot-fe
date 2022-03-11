import React from 'react'

const ItemInfo= ({right, left}) => {
    return (
        <div style={{fontSize: '0.75em', alignSelf: 'left', color: "#fda96f"}}>
            *Swipe list items right to {right} and Swipe left to {left}
        </div>
    )
}

export default ItemInfo