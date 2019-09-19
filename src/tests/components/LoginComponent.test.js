import React from 'react';
import {shallow,configure} from 'enzyme';
import LoginComponent from './../../components/LoginComponent';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe("Login Screen test",()=>{
    it('form check',()=>{
        const enzymeWrapper = shallow(<LoginComponent/>);
        expect(enzymeWrapper.find('form').length).toBe(1);
        expect(enzymeWrapper.find('#email').length).toBe(1);
        expect(toJson(enzymeWrapper)).toMatchSnapshot();
    })
    
})