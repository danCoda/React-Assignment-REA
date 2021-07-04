/* eslint-disable import/no-anonymous-default-export */
import react, {useEffect, useState} from 'react';
import Rea from './api/rea'; 

import ResultsList from './components/resultsList';
import SavedList from './components/savedList';

export default () => {
    const [propertyData, setPropertyData] = useState('');

    const getData = async () => {
        const response = await Rea.get('data');
        setPropertyData(response.data);
        return ('hi');
    }

    if (!propertyData.results) getData();

    const onAdd = () => {
        console.log("Add");
    }
    
    const onRemove = () => {
        console.log("Remove");
    }
    return (
        <>
            <ResultsList items={propertyData.results} callback={onAdd()}></ResultsList>
            <SavedList items={propertyData.saved} callback={onRemove()}></SavedList>
        </>
    );
}

