import React, { useState } from 'react';
import "./itemList.css";

const ListItem = ({item, callback}) => {
    const [isButtonShowing, showButton] = useState(false);


    return (
        <div 
            key={item.id}
            onMouseEnter={e => showButton(true)}
            onMouseLeave={e => showButton(false)}>
            <img src={item.mainImage} alt="interior"/>
            <div>{item.price}</div>

            {isButtonShowing && 
                <button >I might be an invisible button</button>
            }
        </div>
        
    );

}

export default ListItem;