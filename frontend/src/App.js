/* eslint-disable import/no-anonymous-default-export */
import react, {useEffect, useState} from 'react';
import Rea from './api/rea'; 
import './style.css';

import ResultsList from './components/resultsList';
import SavedList from './components/savedList';

export default () => {
    const [propertyData, setPropertyData] = useState({});

    const getData = async () => {
        const response = await Rea.get('data');
        setPropertyData(response.data);
    }
    
    const onAdd = item => { // Add to Saved list.
        propertyData.saved.push(item);
        const results = propertyData.results.filter(_item => _item.id !== item.id);
        setPropertyData({ results, saved: propertyData.saved });
        console.log("Callback Add", item, propertyData);
    }
    
    const onRemove = item => { // Remove from Saved list.
        propertyData.results.push(item);
        const saved = propertyData.saved.filter(_item => _item.id !== item.id);
        setPropertyData({ results: propertyData.results, saved });
    }
    
    if (!propertyData.results) getData();

    return (
        <div id="main">
            <ResultsList items={propertyData.results} callback={onAdd}></ResultsList>
            <SavedList items={propertyData.saved} callback={onRemove}></SavedList>
        </div>
    );
}

