import React from 'react';
import ListItem from './listItem';

const SavedList = (props) => {
    console.log("Saved: ", props.items);
    return (
        <>
            Saved:
            <ListItem items={props.items}></ListItem>
        </>
    )
}

export default SavedList;