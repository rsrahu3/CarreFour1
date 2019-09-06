import * as React from 'react'

export default class LoginComponent extends React.Component {
  render () {
    return (<div>
      <form action="/home" style={{ width: '30%', padding: '20px' }}>
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
    )
  }
}
