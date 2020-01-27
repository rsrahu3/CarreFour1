import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './CSS.css'

export default class AnimationComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {items: ['hello', 'world', 'click', 'me']};
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd(){
   const newItems = [...this.state.items];
    let val = newItems.splice(1,1,newItems[3]);
    newItems.splice(3,1,val[0]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }
render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={100}
          transitionLeaveTimeout={300}>

          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}