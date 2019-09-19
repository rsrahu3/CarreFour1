import React from 'react';


export default class TableComponent extends React.Component{
    constructor(props){
        super(props);
        console.log("Constructor");
    }
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }
    render(){
        return (<table className="table">
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
      </table>)
    }

}
