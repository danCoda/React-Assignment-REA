import React from 'react';
import ListItem from './listItem';

const SavedList = ({ items, callback }) => {
    const renderList = () => {
        if (items) {
            return items.map(item => {
                return <ListItem item={item} key={item.id} buttonText="Remove" callback={callback}></ListItem>
            });
        };
    }

    return (
        <div id="savedList">
            <h1>Saved</h1>
            <div>{renderList()}</div>
        </div>
    )
}

export default SavedList;