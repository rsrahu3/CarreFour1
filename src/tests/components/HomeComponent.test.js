import React from 'react';
import {shallow,configure} from 'enzyme';
import HomeComponent from './../../components/NavComponents/HomeComponent';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'
configure({ adapter: new Adapter() });
import toJson from 'enzyme-to-json';

const initialState = {
data : [{"id":"142591","employee_name":"test65","employee_salary":"123","employee_age":"23","profile_image":""},
                {"id":"142593","employee_name":"mz\/x","employee_salary":"123","employee_age":"23","profile_image":""},
                {"id":"142594","employee_name":"MMODD66ttt","employee_salary":"80","employee_age":"22","profile_image":""},
                {"id":"142603","employee_name":"bew","employee_salary":"200000","employee_age":"25","profile_image":""}]



}; // here it is possible to pass in any middleware if needed into //configureStore
const mockStore = configureStore();
let wrapper;
let store;
beforeEach(() => {  //creates the store with any initial state or middleware needed  
  store = mockStore(initialState)
 })




describe("Home Component Screen test",()=>{
    it('form check',()=>{
       wrapper = shallow(<HomeComponent store={store}/>)
         expect(toJson(wrapper).children[0].node.props.data.length).toBe(4);
         expect(toJson(wrapper)).toMatchSnapshot();
    })
    
})