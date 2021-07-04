import React from 'react';
import ListItem from './listItem';

const ResultsList = (props) => {
    console.log("Results: ", props.items);
    return (
        <>
            Results:
            <ListItem items={props.items}></ListItem>
        </>
    )
}

export default ResultsList;