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
        <h4>
          Skills
        </h4>
        <p>
          {this.props.resume.user_skills}
        </p>
        <h4>
          Work History
        </h4>
        <ul>
          <li>
            {this.props.resume.employment_history_1}
          </li>
        </ul>
        <ul>
          <li>
            {this.props.resume.employment_history_2}
          </li>
        </ul>
        <h4>
          Education
        </h4>
        <ul>
          <li>
            {this.props.resume.education}
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
