import * as React from 'react';
import history from './common/history';
import TopHeader from  './common/TopHeader';

export default class LoginComponent extends React.Component {
  formSubmit = (e)=>{
    history.push("/home");
  }
  render () {
    return (<div id="login">
    <TopHeader/>
    <div className="form">
      <form onSubmit={this.formSubmit} style={{ width: '30%', padding: '20px' }}>
        <div className="form-group">
          <label>Email address:</label>
          <input type="email" required className="form-control" id="email"/>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" required className="form-control" id="password"/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
    </div>
    )
  }
}
