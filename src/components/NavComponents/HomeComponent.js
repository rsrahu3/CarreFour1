import * as React from "react";
import Header from "./../common/Header";
import { connect } from "react-redux";
import thunk from "./../../middleware/thunk";
import TableComponent from "./../TableComponent";
import $ from "jquery";
import TopHeader from './../common/TopHeader'

class HomeComponent extends React.PureComponent {
  componentDidMount() {
    if (this.props.data.length === 0) this.props.showData();
  }
  getLoader(){
     return (
        <div id="headerDiv">
          <center>
            <div
              className="waitAlert alert alert-warning alert-dismissible show"
              role="alert">
                     Please Wait ......
            </div>
          </center>
          <TopHeader/>
          <Header active="home" />
        </div>
      ); 
  }
  render() {
    if (!this.props.showLoader) {
      $(".alert")
        .fadeIn(300)
        .delay(1500)
        .fadeOut(400);
    }
    
    if (this.props.showLoader) {
     return this.getLoader();
    } else {
      return (
         <div style={{height:'100%'}}> <div id="headerDiv">
          <TopHeader/>
          <Header active="home" />
         
          This is Home Component
        </div>
        <div id="content" style={{height:'70%',overflowY:'auto'}}>
         <TableComponent data={this.props.data} />
         </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    showLoader: state.showLoader
  };
};
const mapDispatchToProps = dispatch => {
  return {
    showData: () =>
      dispatch(
        thunk({
          url: "http://dummy.restapiexample.com/api/v1/employees",
          type: "populate_data"
        })
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
