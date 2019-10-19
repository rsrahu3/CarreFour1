import React from 'react';
import TopHeader from './../common/TopHeader';
import Header from './../common/Header';
import TodoList from './../../middleware/getTodoList';
import { connect } from 'react-redux';

const TodoComponent = props => {
  return (
    <div>
      <TopHeader />
      <Header active="todo" />
      <table className="table">
        <thead>
          <tr>
            {props.todoList &&
              props.todoList.length > 0 &&
              Object.keys(props.todoList[0]).map((item, index) => {
                return <th key={item}>{item}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {props.todoList &&
            props.todoList.map((item, index) => (
              <tr key={item.id}>
                {Object.keys(item).map((key, i) => {
                  return <td key={item[key]}>{item[key]}</td>;
                })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

let mapStateToProps = state => {
  console.log(state.toDo.todoList);
  return {
    todoList: state.toDo.todoList
  };
};

let mapStateToDispatch = dispatch => {
  return {
    getToDOList: dispatch(
      TodoList({
        url: 'https://jsonplaceholder.typicode.com/todos',
        type: 'get_todo_list'
      })
    )
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(TodoComponent);
