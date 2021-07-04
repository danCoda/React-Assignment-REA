import React from 'react';
import ListItem from './listItem';

const ResultsList = ({items, callback}) => {
    const renderList = () => {
        if (items) {
            return items.map(item => {
                return <ListItem item={item} callback={callback}></ListItem>
            });
        };
    }

    return (
        <>
            Results:
            <div>{renderList()}</div>
        </>
    )
}

export default ResultsList;