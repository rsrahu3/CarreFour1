import React from 'react';
import {shallow} from 'enzyme';
import ContactComponent from './../../components/NavComponents/ContactComponent';
import Adapter from 'enzyme-adapter-react-16';
import config from './configuartion';
import toJson from 'enzyme-to-json';



describe("ContactComponent Screen test",()=>{
    it('form check',()=>{
        const enzymeWrapper = shallow(<ContactComponent/>);
        expect(enzymeWrapper.find('div').text().includes('This is Contact Component')).toBe(true);
        expect(toJson(enzymeWrapper)).toMatchSnapshot();
    })
    
})