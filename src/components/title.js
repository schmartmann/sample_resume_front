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

class Title extends Component {
  constructor(props){
    super(props)
  };
  render(){
    return(
      <div>
        <h1>
          {this.props.resume.user_name}
        </h1>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Title)
