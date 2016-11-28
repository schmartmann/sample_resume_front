import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchResume } from '../actions/index';
import thunk from 'redux-thunk';

import WorkHistory from "./work_history"
import Education from "./education"
import Skills from "./skills"
import Contact from "./contact"
import Title from "./title"
import Objective from "./objective"

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
  };
  render() {
    return (
      <div>
        <div className="title">
          <Title/>
        </div>
        <div className="contact">
          <Contact/>
        </div>
        <div className="objective">
          <Objective/>
        </div>
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
