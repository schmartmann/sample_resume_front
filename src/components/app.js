import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchResume } from '../actions/index';
import thunk from 'redux-thunk';


function mapStateToProps(state){
  return {
    resume: state.resume
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchResume: fetchResume,
  }, dispatch)
}



class App extends Component {
  constructor(props){
    super(props)
    // this.state = {
    //   user_email: "",
    //   password: "",
    //   emailWarning: false,
    //   passwordWarning: false};
  }
  componentWillMount(){
    console.log("componentWillMount firing")
    this.props.fetchResume()
  }
  render() {
    return (
      <div>crowded coding challenge bic</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
