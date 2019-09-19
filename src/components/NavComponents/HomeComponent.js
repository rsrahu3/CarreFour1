import * as React from "react";
import Header from "./../common/Header";
import { connect } from "react-redux";
import thunk from "./../../middleware/thunk";
import TableComponent from "./../TableComponent";
import $ from 'jquery';

class HomeComponent extends React.PureComponent {
  componentDidMount() {
    if (this.props.data.length === 0) this.props.showData();
  }

  render() {
    if (!this.props.showLoader) {
        $( ".alert" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
    }

    if (this.props.showLoader) {
      return (
        <div id="headerDiv">
         <center>
          <div
            style={{position:'fixed',display:'block',zIndex:1,marginLeft:'28%'}} className="alert alert-warning alert-dismissible show"
            role="alert"
          >
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
          </div>
          </center>
          <Header active="home" />
        </div>
      );
    } else {
      return (
        <div id="headerDiv">
          <Header active="home" />
          <TableComponent data={this.props.data} />
          This is Home Component
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
