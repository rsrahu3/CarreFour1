import * as React from 'react'
import Header from './../common/Header'
import { connect } from 'react-redux'
import thunk from './../../middleware/thunk'

class HomeComponent extends React.Component {
  componentDidMount () {
    this.props.showData()
  }

  render () {
    return <div id="headerDiv" >
      <Header active="home"/>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>SALARY</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((item) => {
            return (<tr key={item.id}>

              {Object.keys(item).map(element => {
                return (<td key={element}>{item[element]}</td>)
              })}

            </tr>)
          })}
        </tbody>
      </table>
          This is Home Component
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    showData: () => dispatch(thunk({ url: 'http://dummy.restapiexample.com/api/v1/employees', type: 'populate_data' }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
