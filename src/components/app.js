import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchResume } from '../actions/index';
import thunk from 'redux-thunk';

import WorkHistory from "./work_history"
import Education from "./education"
import Skills from "./skills"

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
    super(props);
  };
  componentWillMount(){
    this.props.fetchResume();
    this.skillsList();
  };
  skillsList(){
    var skillsList = [];
    console.log("skillsList firing :", this.props)
  };
  render() {
    return (
      <div>
        <h1>
          {this.props.resume.user_name}
        </h1>
        <h4>
          Contact Information
        </h4>
        <ul>
          <li>
            Name: {this.props.resume.user_name}
          </li>
          <li>
            Phone: {this.props.resume.user_phone}
          </li>
          <li>
            Email: {this.props.resume.user_email}
          </li>
        </ul>
        <h4>
          Job Objective:
        </h4>
        <blockquote>
          {this.props.resume.job_objective}
        </blockquote>
        <div className="skills">
          <Skills/>
        </div>
        <div className="work-history">
          <WorkHistory/>
        </div>
        <div className="education">
          <Education/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
