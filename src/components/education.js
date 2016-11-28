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

class Education extends Component {
  constructor(props){
    super(props);
  };
  render(){
    return(
      <div>
        <h4>
          Education
        </h4>
        <ul>
          <li>
            {this.props.resume.education[0]}
          </li>
          <li>
            {this.props.resume.education[1]}
          </li>
          <li>
            {this.props.resume.education[2]}
          </li>
          <li>
            {this.props.resume.education[3]}
          </li>
          <li>
            {this.props.resume.education[4]}
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Education)
