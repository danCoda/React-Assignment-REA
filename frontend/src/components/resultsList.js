import React from 'react';
import ListItem from './listItem';

const ResultsList = ({items, callback}) => {
    console.log("Items results: ", items);
    const renderList = () => {
        if (items) {
            return items.map(item => {
                return <ListItem item={item} key={item.id} callback={callback}></ListItem>
            });
        };
    }

    return (
        <>
            <h1>Results</h1>
            <div>{renderList()}</div>
        </> 
    )
}

export default ResultsList;