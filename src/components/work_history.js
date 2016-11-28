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

class WorkHistory extends Component {
  constructor(props){
    super(props);
  };
  render(){
    return(
      <div>
        <h4>
          Work History
        </h4>
        <ul>
          <li>
            {this.props.resume.employment_history_1[0]}
          </li>
          <li>
            {this.props.resume.employment_history_1[1]}
          </li>
          <li>
            {this.props.resume.employment_history_1[2]}
          </li>
          <li>
            {this.props.resume.employment_history_1[3]}
          </li>
          <li>
            {this.props.resume.employment_history_1[4]}
          </li>
          <li>
            {this.props.resume.employment_history_1[5]}
          </li>
          <br/>
          <li>
            {this.props.resume.employment_history_2[0]}
          </li>
          <li>
            {this.props.resume.employment_history_2[1]}
          </li>
          <li>
            {this.props.resume.employment_history_2[2]}
          </li>
          <li>
            {this.props.resume.employment_history_2[3]}
          </li>
          <li>
            {this.props.resume.employment_history_2[4]}
          </li>
          <li>
            {this.props.resume.employment_history_2[5]}
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(WorkHistory)
