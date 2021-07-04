import React from 'react';

const ListItem = ({items}) => {
    console.log("List items: ", items);
    const renderList = () => {
        if (items) {
            return items.map(item => {
                return (
                    <div>{item.price}</div>
                );
            });
        } else {
            return;
        }
   }


    return (
        <div>{renderList()}</div>
    )
}

export default ListItem;