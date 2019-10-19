import * as React from 'react';
import Header from './../common/Header';
import { connect } from 'react-redux';
import getData from './../../middleware/getData';
import TableComponent from './../TableComponent';
import $ from 'jquery';
import TopHeader from './../common/TopHeader';
import { Trans } from 'react-i18next';

class HomeComponent extends React.PureComponent {
  componentDidMount() {
    if (this.props.data.length === 0) this.props.showData();
  }
  getLoader() {
    return (
      <div id="headerDiv" class="abc" sun="aa">
        <center>
          <div
            className="waitAlert alert alert-warning alert-dismissible show"
            role="alert"
          >
            Please Wait Rahul......
          </div>
        </center>
      </div>
    );
  }
  render() {
    if (!this.props.showLoader) {
      $('.alert')
        .fadeIn(300)
        .delay(1500)
        .fadeOut(400);
    }
    return (
      <div style={{ height: '100%' }}>
        {this.props.showLoader && this.getLoader()}{' '}
        <div id="headerDiv">
          <TopHeader />
          <Header active="home" />
          <Trans>home</Trans>
        </div>
        <div id="content" style={{ height: '70%', overflowY: 'auto' }}>
          <TableComponent />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.home.data,
    showLoader: state.showLoader
  };
};
const mapDispatchToProps = dispatch => {
  return {
    showData: () =>
      dispatch(
        getData({
          url: 'http://dummy.restapiexample.com/api/v1/employees',
          type: 'populate_data'
        })
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
