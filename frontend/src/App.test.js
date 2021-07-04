import React from 'react';
import ResultsList from './components/resultsList';
import SavedList from './components/savedList';

import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { expect } from '@jest/globals';
configure({ adapter: new Adapter() });

const propertyData = {
    "results": [{
        "price": "$526,500",
        "id": "1",
        "mainImage": "image.jpg"
    }, {
        "price": "$526,500",
        "id": "2",
        "mainImage": "image.jpg"
    }, {
        "price": "$526,500",
        "id": "3",
        "mainImage": "image.jpg"
    }],
    "saved": [{
        "price": "$526,500",
        "id": "4",
        "mainImage": "image.jpg"
    }]
};

const callback = jest.fn();

describe('App', () => {
    it('should be able to get data', () => {

    });

    it('should list the correct number of initial result items', () => {
        const wrapper = mount(<ResultsList items={propertyData.results} callback={callback}/>);
        expect(wrapper.find(".item").length).toEqual(3);
    });

    it('should list the correct number of initial saved items', () => {
        const wrapper = mount(<SavedList items={propertyData.saved} callback={callback}/>);
        expect(wrapper.find(".item").length).toEqual(1);
    });

    it('should be able to add to Saved list', () => {
        /* const wrapper = mount(<listItem item={propertyData.results[0]} callback={callback} buttonText="test"/>);
        wrapper.simulate('mouseover');
        const button = wrapper.find('.add');
        button.simulate('click');
        expect(callback).toBeCalledWith(1); */
    });

    it('should be able to remove from Saved list', () => {
        
    });
    
});