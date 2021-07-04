import React from 'react';
import ListItem from './listItem';

const ResultsList = ({items, callback}) => {
    const renderList = () => {
        if (items) {
            return items.map(item => {
                return (
                    <ListItem 
                        item={item} 
                        key={item.id} 
                        buttonText="Add" 
                        callback={callback}>
                    </ListItem>
                );
            });
        };
    }

    return (
        <div id="resultsList">
            <h1>Results</h1>
            <div>{renderList()}</div>
        </div> 
    )
}

export default ResultsList;