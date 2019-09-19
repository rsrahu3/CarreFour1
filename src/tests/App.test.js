import React from 'react'
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme';
import App from './../App'
import config from './components/configuartion';

function setup(){
const enzymeWrapper = shallow(<App/>)
return enzymeWrapper;
}

describe("test app component",()=>{
  it('it should have one div',()=>{
    const enzymeWrapper = setup();
    expect(enzymeWrapper.find('#mainDiv').length).toBe(1);
  })
})

