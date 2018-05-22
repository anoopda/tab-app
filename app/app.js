import React, { Component } from 'react';
import { Provider,connect } from 'react-redux';
import  {AppStackRoot} from './routes';

class App extends Component {
  render() {
    return (
      <AppStackRoot navigation={{
        dispatch: this.props.dispatch,
        state: this.props.navigationState,
        addListener:()=>{}
      }}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);





