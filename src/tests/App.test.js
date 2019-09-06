import React from 'react'
import ReactDOM from 'react-dom'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import {shallow} from 'enzyme';
import App from './../App'

function setup(){
const enzymeWrapper = shallow(<App/>)
return enzymeWrapper;
}

describe("test app component",()=>{
  it('it should have one div',()=>{
    const enzymeWrapper = setup();
   
    expect(enzymeWrapper.find('#mainDiv').length).toBe(1);
    console.log(enzymeWrapper);
  })
})

