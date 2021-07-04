import React, { useState } from 'react';

const ListItem = ({item, callback, buttonText}) => {
    const [isButtonShowing, showButton] = useState(false);

    return (
        <div className="item" 
            onMouseLeave={e => showButton(false)}>
            <img 
                className="houseImg" 
                onMouseOver={e => showButton(true)} 
                src={item.mainImage} alt="interior"/>
            <div>
                <div class="propertyId">Property ID: {item.id}</div>
                <div class="price">{item.price}</div>
            </div>

            {isButtonShowing && 
                <button 
                    className={buttonText === "Add" ? "add" : "remove"} 
                    onClick={e => callback(item)}>
                        {buttonText}
                </button>
            }
        </div>
        
    );

}

export default ListItem;