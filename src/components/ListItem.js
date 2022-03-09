import React from "react";

export default function ListItem(props) {
    const listContent = props.items.map(item => <div className="list-group-item">
        <div className="img-container">
            <img src="./images/icon-check.svg" alt="check button" />
        </div>
        <div className="todo">
            <input type="text" />
        </div>
        <div className="img-container">
            <img src="./images/icon-cross.svg" alt="cross button"></img>
        </div>
        {item}
        
    </div>)
    return (
        <div className="list-group">
            {listContent}
        </div>
    )
}