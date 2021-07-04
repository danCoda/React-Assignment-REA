import React, { useState } from 'react';
import "./itemList.css";

const ListItem = ({item, callback, buttonText}) => {
    const [isButtonShowing, showButton] = useState(false);

    return (
        <div className="item" 
            onMouseLeave={e => showButton(false)}
            >
            <img 
                className="houseImg" 
                onMouseOver={e => showButton(true)} 
                src={item.mainImage} alt="interior"/>
            <div>Property ID: {item.id} - {item.price}</div>

            {isButtonShowing && 
                <button className={buttonText === "Add" ? "add" : "remove"} onClick={e => callback(item)}>{buttonText}</button>
            }
        </div>
        
    );

}

export default ListItem;