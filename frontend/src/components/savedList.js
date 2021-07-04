import React from 'react';
import ListItem from './listItem';

const SavedList = ({ items, callback }) => {
    console.log("Items Saved: ", items);
    const renderList = () => {
        if (items) {
            return items.map(item => {
                return <ListItem item={item} key={item.id} callback={callback}></ListItem>
            });
        };
    }

    return (
        <>
            <h1>Saved</h1>
            <div>{renderList()}</div>
        </>
    )
}

export default SavedList;