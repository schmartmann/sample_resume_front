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

class Objective extends Component {
  constructor(props){
    super(props);
  };
  render(){
    return(
      <div>
        <h4 className="h4-obj">
          Job Objective
        </h4>
        <blockquote>
          {this.props.resume.job_objective}
        </blockquote>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Objective)
