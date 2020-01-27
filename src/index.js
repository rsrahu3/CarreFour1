import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textValue: null };
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
  }

  componentDidMount() {
    console.log(this.textInput.current);
    this.textInput.current.focus();
  }

  focusTextInput = () => {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    console.log(this.textInput.current);
    this.textInput.current.blur();
  };
  onchangeEvent = e => {
    this.setState({ textValue: e.target.value });
  };

  render() {
    let value;
    if (this.textInput.current && this.textInput.current.value) {
      value = this.textInput.current.value;
    }
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input type="text" onChange={this.onchangeEvent} ref={this.textInput} />
        {this.textInput.current && this.textInput.current.value}
        {undefined}
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
