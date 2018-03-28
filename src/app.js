import React from 'react';
import { connect } from 'react-redux';

const App = props => {
  return <div>{props.value}</div>;
};

function mapStateToProps(state) {
  return {
    value: state.comingFromRedux
  };
}

export default connect(mapStateToProps)(App);
